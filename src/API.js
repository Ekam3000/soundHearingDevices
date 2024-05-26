export const getProductsData = async () => {
    try {
        let response = await fetch('products.json', {
            headers: {
                "Content-Type": "application/json"
            }
        })
        let productsData = await response.json();
        return productsData;
    }
    catch (exception) {
        console.log(exception);
    }
};

