from click import File
from fastapi import FastAPI, Form, HTTPException, UploadFile
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, MetaData, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")
templates = Jinja2Templates(directory="templates")

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins= ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Define database connection
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Define SQLAlchemy base
Base = declarative_base()

# Step 2: Pydantic model for user data
class Dish(BaseModel):
    id: int
    name: str
    description: str
    price: int
    tag: str
    discount: int
    menu_id: int
    file_path: str
 

# Define models
class Menu(Base):
    __tablename__ = "menus"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)

    dishes = relationship("Dish", back_populates="menu")

class Dish(Base):
    __tablename__ = "dishes"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    price = Column(Integer)
    tag = Column(String)
    discount =Column(Integer)
    menu_id = Column(Integer, ForeignKey("menus.id"))
    file_path = Column(String)
    

    menu = relationship("Menu", back_populates="dishes")


# Create tables
Base.metadata.create_all(bind=engine)

# Initialize FastAPI app

metadata = MetaData()

# API Endpoints

@app.get("/menus/")
def get_menu():
    db = SessionLocal()
    menu = db.query(Menu).all()
    db.close()
    if menu is None:
        raise HTTPException(status_code=404, detail="Menu not found")
    return menu

@app.get("/dishes/")
def get_dish():
    db = SessionLocal()
    dish = db.query(Dish).all()
    db.close()
    if dish is None:
        raise HTTPException(status_code=404, detail="Dish not found")
    return dish

@app.get("/menus/{menu_id}/")
def get_menu(menu_id: int):
    db = SessionLocal()
    menu = db.query(Menu).filter(Menu.id == menu_id).first()
    db.close()
    if menu is None:
        raise HTTPException(status_code=404, detail="Menu not found")
    return menu


@app.get("/dishes/{dish_id}/")
def get_dish(dish_id: int):
    db = SessionLocal()
    dish = db.query(Dish).filter(Dish.id == dish_id).first()
    db.close()
    if dish is None:
        raise HTTPException(status_code=404, detail="Dish not found")
    return dish

@app.post("/menus/")
def create_menu(name: str):
    db = SessionLocal()
    menu = Menu(name=name)
    db.add(menu)
    db.commit()
    db.refresh(menu)
    db.close()
    return menu


@app.post("/dishes/")
async def create_dish(name: str = Form(...), description: str = Form(...), 
                      menu_id: int = Form(...), price: int = Form(...), 
                        tag: str = Form(...), discount: int = Form(...), file: UploadFile = File(...)):
    db = SessionLocal()
    contents = await file.read()
    file_path = f"uploads/{file.filename}"
    with open(file_path, "wb") as f:
        f.write(contents)
    dish = Dish(name=name, description=description, price=price, tag=tag, discount=discount, menu_id=menu_id, file_path=file.filename)
    db.add(dish)
    db.commit()
    db.refresh(dish)
    db.close()
    return {"id": dish.id, "name": dish.name, "description":dish.description, "price":dish.price, "tag": dish.tag, "discount": dish.discount, "menu_id": dish.menu_id, "file_path": dish.file_path}



