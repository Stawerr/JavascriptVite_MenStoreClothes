import ProductStore from "../../../store/ProductStore.js"
import { descriptionCard } from "./descriptionCard.js"
import { filterProduct } from "./events/filterProducts.js";
import { imageCard } from "./imageCard.js"
import { stars } from "./stars.js";

function cardShop() {
    const divCardShop = document.createElement('div');
    divCardShop.classList.add("grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "p-6", "gap-4");


    (async () => {
        const products = await ProductStore.getAll(true, 8)

        products.forEach(product => {
            const divOneCard = document.createElement('div')
            divOneCard._id = product.id
            divOneCard._title = product.title
            divOneCard.classList.add("product", "flex", "flex-col", "gap-4", "items-center","imageCard", "bg-white", "max-w-[250px]", "rounded-md", "pt-4", "justify-between")
            divOneCard.append(
                imageCard(product.image),
                stars(product.id, product.rate),
                descriptionCard(product.title,product.desc, product.price)
            )
            divCardShop.append(
                divOneCard
            )
        })
    })();

    document.addEventListener('filterProduct', (e) => filterProduct(e,divCardShop) )
    return divCardShop
}


export { cardShop }