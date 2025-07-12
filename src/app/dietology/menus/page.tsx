import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function MenusPage() {
  const menus = [
    { 
      id: 'menu1', 
      name: 'Low-Carb Weekly Plan', 
      description: 'A weekly menu focused on minimizing carbohydrate intake while ensuring balanced nutrition.',
      days: [
        { day: 'Monday', meals: 'Breakfast: Scrambled Eggs, Lunch: Grilled Chicken Salad, Dinner: Baked Salmon with Asparagus' },
        { day: 'Tuesday', meals: 'Breakfast: Greek Yogurt, Lunch: Tuna Salad, Dinner: Steak with Broccoli' },
      ]
    },
    { 
      id: 'menu2', 
      name: 'Vegetarian Bulk-Up Plan', 
      description: 'A protein-rich vegetarian menu designed for muscle gain.',
      days: [
        { day: 'Monday', meals: 'Breakfast: Oatmeal with Nuts, Lunch: Lentil Soup, Dinner: Tofu Stir-fry with Quinoa' },
        { day: 'Tuesday', meals: 'Breakfast: Protein Smoothie, Lunch: Chickpea Curry, Dinner: Black Bean Burgers' },
      ]
    },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">Dietology Menus</h1>
      <Card>
        <CardHeader>
          <CardTitle>Available Meal Plans</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {menus.map(menu => (
              <AccordionItem value={menu.id} key={menu.id}>
                <AccordionTrigger>{menu.name}</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">{menu.description}</p>
                  <div className="space-y-2">
                    {menu.days.map(day => (
                      <div key={day.day}>
                        <h4 className="font-semibold">{day.day}</h4>
                        <p className="text-sm text-muted-foreground">{day.meals}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
