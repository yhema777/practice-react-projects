const mockdata = [
    {
      "id": 1,
      "title": "Chicken Vesuvio",
      "ingredients": [
        "1/2 cup olive oil",
        "5 cloves garlic, peeled",
        "2 large russet potatoes, peeled and cut into chunks",
        "1.5 pounds chicken, cut into 8 pieces (or 3-pound chicken legs)",
        "3/4 cup chicken stock",
        "3/4 cup white wine",
        "1 tablespoon chopped parsley",
        "1 tablespoon dried oregano",
        "Salt and pepper to taste",
        "1 cup frozen peas, thawed"
      ],
      "calories": 432,
      "imageUrl": "https://example.com/images/chicken_vesuvio.jpg"
    },
    {
      "id": 2,
      "title": "Baked Chicken",
      "ingredients": [
        "4 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on",
        "1/2 teaspoon coarse salt",
        "1/2 teaspoon Mrs. Dash seasoning",
        "1/4 teaspoon freshly ground black pepper"
      ],
      "calories": 901,
      "imageUrl": "https://example.com/images/baked_chicken.jpg"
    },
    {
      "id": 3,
      "title": "Catalan Chicken",
      "ingredients": [
        "1 whole 4-pound chicken, quartered",
        "2 slices bacon",
        "30 cloves garlic",
        "3 medium onions, thickly sliced and reserved",
        "1/3 cup brandy or another fortified dessert wine",
        "1 cup water or chicken stock"
      ],
      "calories": 3000,
      "imageUrl": "https://example.com/images/catalan_chicken.jpg"
    },
    {
      "id": 4,
      "title": "Chicken Marsala",
      "ingredients": [
        "4 boneless, skinless chicken breasts",
        "Salt and pepper to taste",
        "1/2 cup all-purpose flour",
        "1/2 cup butter",
        "1 cup sliced mushrooms",
        "1/2 cup Marsala wine",
        "1/2 cup chicken stock"
      ],
      "calories": 400,
      "imageUrl": "https://example.com/images/chicken_marsala.jpg"
    },
    {
      "id": 5,
      "title": "Chicken Alfredo",
      "ingredients": [
        "2 boneless, skinless chicken breasts",
        "2 tablespoons olive oil",
        "Salt and pepper to taste",
        "1/2 cup heavy cream",
        "1/2 cup grated Parmesan cheese",
        "2 cloves garlic, minced",
        "8 ounces fettuccine pasta"
      ],
      "calories": 600,
      "imageUrl": "https://example.com/images/chicken_alfredo.jpg"
    },
    { "id": 6,
      "title": "Chicken Curry",
      "ingredients": [
        "1 pound chicken breasts, cubed",
        "2 tablespoons curry powder",
        "1 onion, diced",
        "2 cloves garlic, minced",
        "1 can coconut milk",
        "1 tablespoon ginger, grated",
        "Salt and pepper to taste"
      ],
      "calories": 500,
      "imageUrl": "https://example.com/images/chicken_curry.jpg"
    },
    {
      "id": 7,
      "title": "Chicken Fajitas",
      "ingredients": [
        "1 pound chicken breasts, sliced",
        "1 red bell pepper, sliced",
        "1 green bell pepper, sliced",
        "1 onion, sliced",
        "2 tablespoons olive oil",
        "1 packet fajita seasoning mix"
      ],
      "calories": 450,
      "imageUrl": "https://example.com/images/chicken_fajitas.jpg"
    },
    {
      "id": 8,
      "title": "Chicken Parmesan",
      "ingredients": [
        "2 boneless, skinless chicken breasts",
        "1 cup breadcrumbs",
        "1/2 cup grated Parmesan cheese",
        "1 egg, beaten",
        "1 cup marinara sauce",
        "1 cup shredded mozzarella cheese",
        "1/4 cup chopped fresh basil"
      ],
      "calories": 700,
      "imageUrl": "https://example.com/images/chicken_parmesan.jpg"
    },
    {
      "id": 9,
      "title": "Chicken Stir Fry",
      "ingredients": [
        "1 pound chicken breasts, sliced",
        "2 tablespoons soy sauce",
        "1 tablespoon oyster sauce",
        "1 tablespoon cornstarch",
        "1 red bell pepper, sliced",
        "1 cup broccoli florets",
        "2 cloves garlic, minced",
        "1 tablespoon ginger, grated"
      ],
      "calories": 350,
      "imageUrl": "https://example.com/images/chicken_stir_fry.jpg"
    },
    {
      "id": 10,
      "title": "Chicken Tacos",
      "ingredients": [
        "1 pound chicken breasts, shredded",
        "1 packet taco seasoning mix",
        "1/2 cup water",
        "8 small tortillas",
        "1 cup shredded lettuce",
        "1 cup diced tomatoes",
        "1/2 cup shredded cheese"
      ],
      "calories": 400,
      "imageUrl": "https://example.com/images/chicken_tacos.jpg"
    },
    {
      "id": 11,
      "title": "Chicken Salad",
      "ingredients": [
        "2 cups cooked, shredded chicken",
        "1/2 cup mayonnaise",
        "1/4 cup diced celery",
        "1/4 cup diced red onion",
        "1 tablespoon lemon juice",
        "Salt and pepper to taste",
        "Lettuce leaves for serving"
      ],
      "calories": 250,
      "imageUrl": "https://example.com/images/chicken_salad.jpg"
    },
    {
      "id": 12,
      "title": "Chicken Pot Pie",
      "ingredients": [
        "1 pound cooked chicken, diced",
        "1 cup frozen mixed vegetables, thawed",
        "1/2 cup chicken broth",
        "1/2 cup heavy cream",
        "1/4 cup butter",
        "1/4 cup all-purpose flour",
        "Salt and pepper to taste",
        "1 pie crust, unbaked"
      ],
      "calories": 600,
      "imageUrl": "https://example.com/images/chicken_pot_pie.jpg"
    },
    {
      "id": 13,
      "title": "Chicken Soup",
      "ingredients": [
        "1 pound chicken breasts, cubed",
        "2 carrots, sliced",
        "2 celery stalks, sliced",
        "1 onion, diced",
        "8 cups chicken broth",
        "2 cloves garlic, minced",
        "Salt and pepper to taste",
        "1 teaspoon dried thyme",
        "1 cup egg noodles"
      ],
      "calories": 300,
      "imageUrl": "https://example.com/images/chicken_soup.jpg"
    },
    {
      "id": 14,
      "title": "Chicken Quesadillas",
      "ingredients": [
        "2 cups cooked, shredded chicken",
        "1 cup shredded cheese",
        "1/4 cup salsa",
        "4 large tortillas",
        "1/4 cup chopped cilantro",
        "1 tablespoon olive oil"
      ],
      "calories": 400,
      "imageUrl": "https://example.com/images/chicken_quesadillas.jpg"
    },
    {
      "id": 15,
      "title": "Chicken Kebabs",
      "ingredients": [
        "1 pound chicken breasts, cubed",
        "1 red bell pepper, cubed",
        "1 yellow bell pepper, cubed",
        "1 red onion, cubed",
        "1/4 cup olive oil",
        "2 tablespoons lemon juice",
        "2 cloves garlic, minced",
        "Salt and pepper to taste",
        "Wooden skewers, soaked in water"
      ],
      "calories": 350,
      "imageUrl": "https://example.com/images/chicken_kebabs.jpg"
    },
    {
      "id": 16,
      "title": "Chicken Enchiladas",
      "ingredients": [
        "2 cups cooked, shredded chicken",
        "1 cup enchilada sauce",
        "1 cup shredded cheese",
        "8 small tortillas",
        "1/2 cup diced onions",
        "1/2 cup diced green chilies",
        "1/4 cup chopped cilantro"
      ],
      "calories": 500,
      "imageUrl": "https://example.com/images/chicken_enchiladas.jpg"
    },
    {
      "id": 17,
      "title": "Chicken Burger",
      "ingredients": [
        "1 pound ground chicken",
        "1/4 cup breadcrumbs",
        "1 egg, beaten",
        "1/4 cup finely chopped onion",
        "Salt and pepper to taste",
        "4 hamburger buns",
        "Lettuce leaves for serving",
        "Sliced tomatoes for serving",
        "Sliced cheese for serving"
      ],
      "calories": 550,
      "imageUrl": "https://example.com/images/chicken_burger.jpg"
    },
    {
      "id": 18,
      "title": "Chicken Fried Rice",
      "ingredients": [
        "1 pound cooked chicken, diced",
        "2 cups cooked rice",
        "1 cup frozen peas and carrots, thawed",
        "2 eggs, beaten",
        "2 tablespoons soy sauce",
        "1 tablespoon sesame oil",
        "2 cloves garlic, minced",
        "1/2 cup chopped green onions"
      ],
      "calories": 450,
      "imageUrl": "https://example.com/images/chicken_fried_rice.jpg"
    },
    {
      "id": 19,
      "title": "Chicken Nuggets",
      "ingredients": [
        "1 pound chicken breasts, cut into nuggets",
        "1 cup breadcrumbs",
        "1/2 cup grated Parmesan cheese",
        "1/2 cup flour",
        "2 eggs, beaten",
        "Salt and pepper to taste",
        "1/4 cup vegetable oil for frying"
      ],
      "calories": 300,
      "imageUrl": "https://example.com/images/chicken_nuggets.jpg"
    },
    {
      "id": 20,
      "title": "Chicken Sandwich",
      "ingredients": [
        "2 boneless, skinless chicken breasts",
        "4 slices bread",
        "1/4 cup mayonnaise",
        "1 tablespoon mustard",
        "Lettuce leaves for serving",
        "Sliced tomatoes for serving"
      ],
      "calories": 350,
      "imageUrl": "https://example.com/images/chicken_sandwich.jpg"
    }
  ]


export default mockdata;
  