document.addEventListener('DOMContentLoaded', () => {
    const featuredProducts = [
        { id: 1, title: 'Berserk', image: 'img/Berserk.jpg', description: 'Ein gewaltiges Schwert schulternd, das seine hünenhafte Gestalt noch überragte, eine linke Hand, aus dem härtesten Stahl geschmiedet, ein schwarzer Umgang, der ihn umhüllte, das war die Erscheinung des Schwertkämpfers, der sich Guts nannte. Er war auf dem Weg zu einem Ort, wo das Blut aus dicken Wolken herniederprasselte, und wo nicht Felsen, sondern Leichen sich zu Bergen auftürmten. Die kleine Elfe Puck, die ihn, seit er sie aus höchster Gefahr gerettet hatte, umschwebt und hinterherflattert, ist entzückt von seiner gewaltigen Kraft, aber andererseits graut ihr auch vor der Grausamkeit der Welt, in der Guts zu Hause ist. Auf dem Weg bösartige Dämonenhorden und an Guts Hals ein Brandmal, das sie immer wieder zum ihm führt!', price: '10.00' },
        { id: 2, title: 'One Piece', image: 'img/One_Piece.jpg', description: 'Reichtum, Macht und Ruhm. Der Mann, der sich dies alles erkämpft hatte, war Gold Roger, der König der Piraten. Als er hingerichtet wurde, waren seine letzten Worte: »Ihr wollt meinen Schatz? Den könnt ihr haben! Sucht ihn doch! Irgendwo habe ich den größten Schatz der Welt versteckt.« Dieser Schatz ist das One Piece und er liegt irgendwo auf der Grandline. Damit brach das große Piratenzeitalter an …', price: '12.00' },
        // Weitere Produkte hinzufügen
    ];

    const allProducts = [
        { id: 1, title: 'Berserk', image: 'img/Berserk.jpg', description: 'Ein gewaltiges Schwert schulternd, das seine hünenhafte Gestalt noch überragte, eine linke Hand, aus dem härtesten Stahl geschmiedet, ein schwarzer Umgang, der ihn umhüllte, das war die Erscheinung des Schwertkämpfers, der sich Guts nannte. Er war auf dem Weg zu einem Ort, wo das Blut aus dicken Wolken herniederprasselte, und wo nicht Felsen, sondern Leichen sich zu Bergen auftürmten. Die kleine Elfe Puck, die ihn, seit er sie aus höchster Gefahr gerettet hatte, umschwebt und hinterherflattert, ist entzückt von seiner gewaltigen Kraft, aber andererseits graut ihr auch vor der Grausamkeit der Welt, in der Guts zu Hause ist. Auf dem Weg bösartige Dämonenhorden und an Guts Hals ein Brandmal, das sie immer wieder zum ihm führt!', price: '10.00' },
        { id: 2, title: 'One Piece', image: 'img/One_Piece.jpg', description: 'Reichtum, Macht und Ruhm. Der Mann, der sich dies alles erkämpft hatte, war Gold Roger, der König der Piraten. Als er hingerichtet wurde, waren seine letzten Worte: »Ihr wollt meinen Schatz? Den könnt ihr haben! Sucht ihn doch! Irgendwo habe ich den größten Schatz der Welt versteckt.« Dieser Schatz ist das One Piece und er liegt irgendwo auf der Grandline. Damit brach das große Piratenzeitalter an …', price: '12.00' },
        // Weitere Produkte hinzufügen
    ];

    const featuredProductsContainer = document.getElementById('featured-products');
    const allProductsContainer = document.getElementById('all-products');

    if (featuredProductsContainer) {
        featuredProducts.forEach(product => {
            const productElement = createProductElement(product);
            featuredProductsContainer.appendChild(productElement);
        });
    }

    if (allProductsContainer) {
        allProducts.forEach(product => {
            const productElement = createProductElement(product);
            allProductsContainer.appendChild(productElement);
        });
    }

    document.getElementById('newsletter-form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Newsletter Anmeldung erfolgreich!');
    });

    document.getElementById('contact-form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Nachricht gesendet!');
    });

    if (document.getElementById('product-detail')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = allProducts.find(p => p.id == productId);
        if (product) {
            displayProductDetails(product);
        }
    }

    function createProductElement(product) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price} €</p>
            <a href="product-detail.html?id=${product.id}"><button>Bestellen</button></a>
        `;
        return productDiv;
    }

    function displayProductDetails(product) {
        const productDetailContainer = document.getElementById('product-detail');
        productDetailContainer.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>${product.price} €</p>
            <form id="order-form">
                <input type="number" name="quantity" min="1" placeholder="Menge" required>
                <button type="submit">Bestellen</button>
            </form>
        `;
        document.getElementById('order-form').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Bestellung erfolgreich!');
        });
    }
});