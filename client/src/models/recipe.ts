import { User } from "./user";
import { Foodtype } from "./foodtype";

export interface Recipe {
    id: number,
    mealImg: string
    titleMeal: string,
    shortDesc: string,
    file: Array<any>,
    ingredients: string,
    directions: Array<string>,
    prepTime: string,
    cookTime: string,
    rated: string,
    foodtype: Foodtype
}

    /**
   * recipies
   */
export  const defaultRecipe: Recipe[] = [
   /*  {
        id: 0,
        mealImg: "apfelkuchen.png",
        titleMeal: "Saftiger Apfelkuchen mit Streusel",
        shortDesc: "Dieser saftige Apfelkuchen überzeugt mit einem wunderbaren Mürbeteig-Boden, saftigen Äpfeln und traumhaft leckeren Streuseln. Mit Videoanleitung!",
        ingredients:  "125g Butter , 100g Zucker, 1 Pck. Vanillezucker, 1 Ei, 250g Mehl, ½ Pck Backpulver, 1 Prise Salz, für den Belag, 800 g Äpfel, 1 Prise Zimt, 1 TL Zitronensaft",
        directions: [
            "Für den Teig Butter, Zucker, Vanillezucker, Eier, Mehl, Backpulver und Salz miteinander verkneten. Den Teig in Frischhaltefolie wickeln und 60 Min kaltstellen. ", 
            "Den Ofen auf 180 Grad (Umluft: 160 Grad) vorheizen. Eine Springform (Ø 26 cm) gut einfetten. Den Teig aus dem Kühlschrank nehmen. Auf leicht bemehlter Arbeitsfläche rund ausrollen bis er etwas größer als die Springform ist. Den Teig in die Form legen und mit den Fingern zurecht drücken, bis ein etwa 3cm hoher Rand entstanden ist."
        ],
        file: [],
         prepTime: '35',
        cookTime: '60',
        rated: '3',
        foodtype: Foodtype.VEGETARIAN
    },
    {
        id: 1,
        mealImg: "apfelkuchen.png",
        titleMeal: "Saftiger Apfelkuchen mit Streusel",
        shortDesc: "Dieser saftige Apfelkuchen überzeugt mit einem wunderbaren Mürbeteig-Boden, saftigen Äpfeln und traumhaft leckeren Streuseln. Mit Videoanleitung!",
        ingredients:  "125g Butter , 100g Zucker, 1 Pck. Vanillezucker, 1 Ei, 250g Mehl, ½ Pck Backpulver, 1 Prise Salz, für den Belag, 800 g Äpfel, 1 Prise Zimt, 1 TL Zitronensaft",
        directions: [
            "Für den Teig Butter, Zucker, Vanillezucker, Eier, Mehl, Backpulver und Salz miteinander verkneten. Den Teig in Frischhaltefolie wickeln und 60 Min kaltstellen. ", 
            "Den Ofen auf 180 Grad (Umluft: 160 Grad) vorheizen. Eine Springform (Ø 26 cm) gut einfetten. Den Teig aus dem Kühlschrank nehmen. Auf leicht bemehlter Arbeitsfläche rund ausrollen bis er etwas größer als die Springform ist. Den Teig in die Form legen und mit den Fingern zurecht drücken, bis ein etwa 3cm hoher Rand entstanden ist."
        ],
        file: [],
        prepTime: '35',
        cookTime: '60',
        rated: '3',
        foodtype: Foodtype.VEGETARIAN
    } */
  ];