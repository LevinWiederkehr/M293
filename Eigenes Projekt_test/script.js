document.addEventListener('DOMContentLoaded', () => {
    const featuredProducts = [
        { id: 1, title: 'Berserk', image: 'img/Berserk.jpg', description: 'Ein gewaltiges Schwert schulternd, das seine hünenhafte Gestalt noch überragte, eine linke Hand, aus dem härtesten Stahl geschmiedet, ein schwarzer Umgang, der ihn umhüllte, das war die Erscheinung des Schwertkämpfers, der sich Guts nannte. Er war auf dem Weg zu einem Ort, wo das Blut aus dicken Wolken herniederprasselte, und wo nicht Felsen, sondern Leichen sich zu Bergen auftürmten. Die kleine Elfe Puck, die ihn, seit er sie aus höchster Gefahr gerettet hatte, umschwebt und hinterherflattert, ist entzückt von seiner gewaltigen Kraft, aber andererseits graut ihr auch vor der Grausamkeit der Welt, in der Guts zu Hause ist. Auf dem Weg bösartige Dämonenhorden und an Guts Hals ein Brandmal, das sie immer wieder zum ihm führt!', price: '21.90' },
        { id: 2, title: 'One Piece', image: 'img/One_Piece.jpg', description: 'Reichtum, Macht und Ruhm. Der Mann, der sich dies alles erkämpft hatte, war Gold Roger, der König der Piraten. Als er hingerichtet wurde, waren seine letzten Worte: »Ihr wollt meinen Schatz? Den könnt ihr haben! Sucht ihn doch! Irgendwo habe ich den größten Schatz der Welt versteckt.« Dieser Schatz ist das One Piece und er liegt irgendwo auf der Grandline. Damit brach das große Piratenzeitalter an …', price: '11.90' },
        { id: 3, title: 'Death Note', image: 'img/Death_Note.jpg', description: 'Light Yagami geht in die Oberschule und steht kurz vor den schwierigen Aufnahmeprüfungen für Japans Elite-Universitäten. Doch das ist für Light keine große Herausforderung. Schließlich ist er mit so überdurchschnittlicher Intelligenz gesegnet, dass er alle Prüfungen stets mit Bravour besteht, und außerdem ist er fleißig und gewissenhaft. Doch eines Tages findet er auf dem Schulhof ein rätselhaftes Notizbuch. Es handelt sich um ein sogenanntes »Death Note«. Wenn man den Namen eines Menschen in das Buch schreibt, stirbt dieser Mensch. Light findet nicht nur Genaueres über die genaue Vorgehensweise heraus, sondern trifft auch bald auf den ursprünglichen Besitzer des Buches: einen Todesgott.', price: '11.90' },
        { id: 4, title: 'Fullmetal Alchemist', image: 'img/Fullmetal_Alchemist.jpg', description: 'In »Fullmetal Alchemist« versuchen die zwei Brüder Ed und Alphonse Elric, ihre tote Mutter mittels Alchemie wieder ins Leben zurück zu holen. Eine Entscheidung, für die sie einen hohen Preis zahlen müssen: Als Körper stirbt, aber seinem Bruder gelingt es in letzter Sekunde seine Seele an eine Ritterrüstung zu binden. Dafür verliert er ein Bein und einen Arm. Nachdem seine fehlenden Gliedmaßen durch Prothesen aus Metall ersetzt wurden, begeben sich die beiden auf die Suche nach dem Stein der Weisen, ein mythisches Objekt, von dem behauptet wird, es könne Unmögliches möglich machen – auch die Wiederherstellung der ursprünglichen Körper von Ed und Al. Ein langes Abenteuer beginnt in dem sich die beiden Brüder nicht nur einigen Gefahren stellen müssen sondern auch schreckliche Geheimnisse lüften, die auch ihren Vater betreffen …', price: '8.90' },
        { id: 5, title: 'Solo Leveling', image: 'img/Solo_Leveling.jpg', description: 'In »Solo Leveling« geht es um eine Welt, in der sich vor zehn Jahren sogenannte »Gates« öffneten, die eine Verbindung zwischen der realen Welt und der der Monster darstellen. Gleichzeitig mit der Öffnung der »Gates« erhielten manche Menschen besondere Fähigkeiten, die es ihnen erlaubten, die Monster zu jagen, die aus diesen Gates kamen. Diese Menschen werden als »Hunter« bezeichnet. Jedoch sind nicht alle »Hunter« stark, manche können ihre Fähigkeiten auch einfach nicht weiter trainieren.', price: '24.90' },
        { id: 6, title: 'Monster', image: 'img/Monster.jpg', description: 'Deutschland, 1986. Dr. Kenzo Tenma ist Neurochirurg in einer Düsseldorfer Klinik. Eigentlich ist es der perfekte Job für einen Arzt wie ihn, wenn es da nicht seine Vorgesetzen gäbe. Mehrfach muss er einflussreiche Patienten bei der medizinischen Versorgung vorziehen.', price: '10.00' },
        { id: 7, title: 'The Breaker: New Waves', image: 'img/The_Breaker_New_Waves.jpg', description: 'Nachdem sein Ki-Zentrum von seinem Meister zerstört wurde, verlässt Shi-Woon die Welt der Murim, um ein normales Leben zu führen, welches ihm sein Meister ermöglichen wollte. Aber für jemanden, der das Phönix-Medaillon des Sun-Woo-Klans und die Kenntnis über die »Black Heaven & Earth«-Technik besitzt, wird die Welt der Murim ihn nicht so einfach gehen lassen …', price: '18.00' },
        { id: 8, title: 'Spice & Wolf', image: 'img/Spice_Wolf.jpg', description: 'Kraft Lawrence ist ein umherziehender Händler, der davon lebt, seine Waren in immer neuen Städten zu verkaufen. Eines Tages kommt er mal wieder in die Stadt Pasroe, wo zurzeit ein Erntefest stattfindet. Die Einwohner feiern dieses Fest jedes Jahr, um so der Erntegöttin Holo zu danken. Doch in dieser Nacht findet Lawrence in seinem Wagen ein Mädchen mit Wolfsohren, das sich später als ebenjene Wolfsgöttin entpuppt – Holo. Sie will sich Lawrence anschließen, um zurück in ihre alte Heimat zu gelangen, doch der scheint von dieser Idee nicht sonderlich begeistert zu sein …', price: '19.90' },
        { id: 9, title: 'Your Name.', image: 'img/Your_Name.jpg', description: 'Mitsuha lebt in einem Dorf in den Bergen, sehnt sich aber nach einem aufregenden Leben in der Stadt. So sehr, dass sie eines Nachts sogar beginnt davon zu träumen: Im Schlaf ist sie Taki, ein Junge aus der Metropole Tokio. Als aus dem Traum plötzlich Realität wird und Mitsuha in Takis Körper aufwacht, ist sie vollkommen verwirrt. Wer ist dieser Junge? Was macht sie in seinem Körper? Und vor allem: Wie kann sie das wieder umkehren? Eine berührende Liebesgeschichte durch Zeit und Raum nimmt ihren Lauf …', price: '35.10' },
        { id: 10, title: 'Nana', image: 'img/Nana.jpg', description: 'Nana Komatsu, aufgewachsen in einer entlegenen Kleinstadt, träumt seit jeher von der großen Liebe, doch ihre bisherige Auswahl an Männern, nämlich überwiegend Erwachsene, wie zum Beispiel ihrer Kunstlehrer, hat dafür gesorgt, dass ihr Liebesleben in der Oberschule zwar nicht eintönig, aber keineswegs zufriedenstellend war. Als sie den attraktiven Shouji kennenlernt, könnte daraus was werden, aber das Schicksal hat andere Pläne, denn während ihre beste Freundin Junko und auch ihr Shouji zwecks Studium nach Tokio gehen, muss sie aufgrund ihrer vergeigten Aufnahmeprüfung zurückzubleiben und erst einmal Geld zu verdienen.', price: '16.90' },
        // Weitere Produkte hinzufügen
    ];

    const allProducts = [
        { id: 1, title: 'Berserk', image: 'img/Berserk.jpg', description: 'Ein gewaltiges Schwert schulternd, das seine hünenhafte Gestalt noch überragte, eine linke Hand, aus dem härtesten Stahl geschmiedet, ein schwarzer Umgang, der ihn umhüllte, das war die Erscheinung des Schwertkämpfers, der sich Guts nannte. Er war auf dem Weg zu einem Ort, wo das Blut aus dicken Wolken herniederprasselte, und wo nicht Felsen, sondern Leichen sich zu Bergen auftürmten. Die kleine Elfe Puck, die ihn, seit er sie aus höchster Gefahr gerettet hatte, umschwebt und hinterherflattert, ist entzückt von seiner gewaltigen Kraft, aber andererseits graut ihr auch vor der Grausamkeit der Welt, in der Guts zu Hause ist. Auf dem Weg bösartige Dämonenhorden und an Guts Hals ein Brandmal, das sie immer wieder zum ihm führt!', price: '21.90' },
        { id: 2, title: 'One Piece', image: 'img/One_Piece.jpg', description: 'Reichtum, Macht und Ruhm. Der Mann, der sich dies alles erkämpft hatte, war Gold Roger, der König der Piraten. Als er hingerichtet wurde, waren seine letzten Worte: »Ihr wollt meinen Schatz? Den könnt ihr haben! Sucht ihn doch! Irgendwo habe ich den größten Schatz der Welt versteckt.« Dieser Schatz ist das One Piece und er liegt irgendwo auf der Grandline. Damit brach das große Piratenzeitalter an …', price: '11.90' },
        { id: 3, title: 'Death Note', image: 'img/Death_Note.jpg', description: 'Light Yagami geht in die Oberschule und steht kurz vor den schwierigen Aufnahmeprüfungen für Japans Elite-Universitäten. Doch das ist für Light keine große Herausforderung. Schließlich ist er mit so überdurchschnittlicher Intelligenz gesegnet, dass er alle Prüfungen stets mit Bravour besteht, und außerdem ist er fleißig und gewissenhaft. Doch eines Tages findet er auf dem Schulhof ein rätselhaftes Notizbuch. Es handelt sich um ein sogenanntes »Death Note«. Wenn man den Namen eines Menschen in das Buch schreibt, stirbt dieser Mensch. Light findet nicht nur Genaueres über die genaue Vorgehensweise heraus, sondern trifft auch bald auf den ursprünglichen Besitzer des Buches: einen Todesgott.', price: '11.90' },
        { id: 4, title: 'Fullmetal Alchemist', image: 'img/Fullmetal_Alchemist.jpg', description: 'In »Fullmetal Alchemist« versuchen die zwei Brüder Ed und Alphonse Elric, ihre tote Mutter mittels Alchemie wieder ins Leben zurück zu holen. Eine Entscheidung, für die sie einen hohen Preis zahlen müssen: Als Körper stirbt, aber seinem Bruder gelingt es in letzter Sekunde seine Seele an eine Ritterrüstung zu binden. Dafür verliert er ein Bein und einen Arm. Nachdem seine fehlenden Gliedmaßen durch Prothesen aus Metall ersetzt wurden, begeben sich die beiden auf die Suche nach dem Stein der Weisen, ein mythisches Objekt, von dem behauptet wird, es könne Unmögliches möglich machen – auch die Wiederherstellung der ursprünglichen Körper von Ed und Al. Ein langes Abenteuer beginnt in dem sich die beiden Brüder nicht nur einigen Gefahren stellen müssen sondern auch schreckliche Geheimnisse lüften, die auch ihren Vater betreffen …', price: '8.90' },
        { id: 5, title: 'Solo Leveling', image: 'img/Solo_Leveling.jpg', description: 'In »Solo Leveling« geht es um eine Welt, in der sich vor zehn Jahren sogenannte »Gates« öffneten, die eine Verbindung zwischen der realen Welt und der der Monster darstellen. Gleichzeitig mit der Öffnung der »Gates« erhielten manche Menschen besondere Fähigkeiten, die es ihnen erlaubten, die Monster zu jagen, die aus diesen Gates kamen. Diese Menschen werden als »Hunter« bezeichnet. Jedoch sind nicht alle »Hunter« stark, manche können ihre Fähigkeiten auch einfach nicht weiter trainieren.', price: '24.90' },
        { id: 6, title: 'Monster', image: 'img/Monster.jpg', description: 'Deutschland, 1986. Dr. Kenzo Tenma ist Neurochirurg in einer Düsseldorfer Klinik. Eigentlich ist es der perfekte Job für einen Arzt wie ihn, wenn es da nicht seine Vorgesetzen gäbe. Mehrfach muss er einflussreiche Patienten bei der medizinischen Versorgung vorziehen.', price: '10.00' },
        { id: 7, title: 'The Breaker: New Waves', image: 'img/The_Breaker_New_Waves.jpg', description: 'Nachdem sein Ki-Zentrum von seinem Meister zerstört wurde, verlässt Shi-Woon die Welt der Murim, um ein normales Leben zu führen, welches ihm sein Meister ermöglichen wollte. Aber für jemanden, der das Phönix-Medaillon des Sun-Woo-Klans und die Kenntnis über die »Black Heaven & Earth«-Technik besitzt, wird die Welt der Murim ihn nicht so einfach gehen lassen …', price: '18.00' },
        { id: 8, title: 'Spice & Wolf', image: 'img/Spice_Wolf.jpg', description: 'Kraft Lawrence ist ein umherziehender Händler, der davon lebt, seine Waren in immer neuen Städten zu verkaufen. Eines Tages kommt er mal wieder in die Stadt Pasroe, wo zurzeit ein Erntefest stattfindet. Die Einwohner feiern dieses Fest jedes Jahr, um so der Erntegöttin Holo zu danken. Doch in dieser Nacht findet Lawrence in seinem Wagen ein Mädchen mit Wolfsohren, das sich später als ebenjene Wolfsgöttin entpuppt – Holo. Sie will sich Lawrence anschließen, um zurück in ihre alte Heimat zu gelangen, doch der scheint von dieser Idee nicht sonderlich begeistert zu sein …', price: '19.90' },
        { id: 9, title: 'Your Name.', image: 'img/Your_Name.jpg', description: 'Mitsuha lebt in einem Dorf in den Bergen, sehnt sich aber nach einem aufregenden Leben in der Stadt. So sehr, dass sie eines Nachts sogar beginnt davon zu träumen: Im Schlaf ist sie Taki, ein Junge aus der Metropole Tokio. Als aus dem Traum plötzlich Realität wird und Mitsuha in Takis Körper aufwacht, ist sie vollkommen verwirrt. Wer ist dieser Junge? Was macht sie in seinem Körper? Und vor allem: Wie kann sie das wieder umkehren? Eine berührende Liebesgeschichte durch Zeit und Raum nimmt ihren Lauf …', price: '35.10' },
        { id: 10, title: 'Nana', image: 'img/Nana.jpg', description: 'Nana Komatsu, aufgewachsen in einer entlegenen Kleinstadt, träumt seit jeher von der großen Liebe, doch ihre bisherige Auswahl an Männern, nämlich überwiegend Erwachsene, wie zum Beispiel ihrer Kunstlehrer, hat dafür gesorgt, dass ihr Liebesleben in der Oberschule zwar nicht eintönig, aber keineswegs zufriedenstellend war. Als sie den attraktiven Shouji kennenlernt, könnte daraus was werden, aber das Schicksal hat andere Pläne, denn während ihre beste Freundin Junko und auch ihr Shouji zwecks Studium nach Tokio gehen, muss sie aufgrund ihrer vergeigten Aufnahmeprüfung zurückzubleiben und erst einmal Geld zu verdienen.', price: '16.90' },
        { id: 11, title: 'One-Punch Man', image: 'img/One-Punch_Man.jpg', description: 'In einer Welt, in der Superhelden nichts Außergewöhnliches sind und theoretisch jeder einer werden kann, hat Saitama ein kurioses Hobby: Superheld sein. Doch Saitama ist kein gewöhnlicher Mensch, der nur Superheld spielt, denn aufgrund seines ganz persönlichen Trainings ist er mittlerweile so stark geworden, dass er jeden Gegner buchstäblich mit nur einem einzigen Schlag in die Knie zwingt. Das hat aber dazu geführt, dass er beim Kämpfen kaum noch Nervenkitzel verspürt, und da ihn auch niemand wirklich beachtet oder ihm Anerkennung verleiht, verfällt er in eine existentielle Krise – einfach nichts macht ihm mehr Spaß.', price: '12.00' },
        { id: 12, title: 'Elfen Lied', image: 'img/Elfen_Lied.jpg', description: 'Lucy tötet jeden Menschen, der in ihre Nähe kommt, sofort. Sie ist eine Mutantin mit abnormen Fähigkeiten, die in einem Forschungslabor unter strengsten Sicherheitsvorkehrungen festgehalten wird. Dennoch gelingt es ihr eines Tages zu fliehen. Wenig später finden der Student Kouta und seine Cousine Yuka am Strand ein hilfloses Mädchen. Da es sein Gedächtnis verloren zu haben scheint, nehmen die zwei sich ihm an … Ist es nur eine Frage der Zeit, bis Lucy ihnen ihr mörderisches Gesicht zeigt?', price: '12.00' },
        { id: 13, title: 'Tokyo Ghoul', image: 'img/Tokyo_Ghoul.jpg', description: 'Dem Tod gerade noch mal von der Schippe gesprungen, erwacht Oberschüler Ken als Ghul wieder. Zuerst ist alles normal. Doch dann beginnt er, Appetit auf Menschen zu entwickeln ‒ was einige moralische Fragen aufwirft. Ken würde sich lieber umbringen, als Menschen zu fressen. So weit kommt es aber gar nicht, denn offenbar gibt es noch andere wie ihn. Eine geheime Gesellschaft der Ghule lebt längst unter uns.', price: '12.00' },
        { id: 14, title: 'Attack on Titan', image: 'img/Attack_on_Titan.jpg', description: 'Mehrere hundert Jahre zuvor wurde die Menschheit beinahe von Titanen ausgerottet. Sie sind riesengroß, verfügen über wenig Intelligenz und scheinen Menschen nur des Vergnügens wegen zu fressen. Ein kleiner Prozentsatz an Menschen überlebte, indem sie sich hinter drei großen Mauern verschanzten, die größer als die größten Titanen sind. Seit über 100 Jahren hat kein Mensch mehr innerhalb der Mauern einen Titanen gesehen.', price: '12.00' },
        { id: 15, title: 'Gintama', image: 'img/Gintama.jpg', description: 'Die große Ära der Samurai neigt sich dem Ende zu und es ist streng verboten, Schwerter zu tragen. Nur ein junger Mann hält an der „Seele der Samurai“ fest: Gintoki Sakata, ein „Freischaffender“, der für Geld so ziemlich jeden Job erledigt. Und Jobs gibt es genug, seit die außerirdischen „Amanto“ auf die Erde gekommen sind und heimlich die Macht an sich reißen wollen. Bewaffnet mit einem Holzschwert, schlägt sich Gintoki durch diese neue Zeit und lässt dabei keine Gelegenheit aus, Außerirdische, Menschen und natürlich sich selbst zielsicher in schräge Abenteuer zu treiben.', price: '12.00' },
        { id: 16, title: 'A Silent Voice', image: 'img/A_Silent_Voice.jpg', description: 'Shouya Ishida ist ein sehr aktives Kind. Mit seinen Freunden veranstaltet er regelmäßig Mutproben, um sich zu beweisen. Das Schulleben findet er langweilig und kann nicht verstehen, warum seine Freunde immer öfter von ihm verlangen, erwachsen zu werden. Als eines Tages das hörgeschädigte Mädchen Shouko Nishimiya in seine Klasse kommt, macht es ihm erst Spaß, sie zu ärgern; doch da ist scheinbar mehr …', price: '12.00' },
        { id: 17, title: 'Mushoku Tensei', image: 'img/Mushoku_Tensei.jpg', description: 'Nachdem ein arbeitsloser 34-jähriger Otaku von seiner Familie aus seinem Haus geworfen wurde und eine Sackgasse im Leben erreicht hat, erinnerte er sich, dass sein Leben tatsächlich viel besser hätte sein können, wenn er in der Vergangenheit bessere Entscheidungen getroffen hätte. Also beschließt er, dass es Zeit ist, ein neues Kapitel in seinem Leben aufzuschlagen. Kaum hatte er diese Entscheidung getroffen, sah er einen Lastwagen, der sich mit hoher Geschwindigkeit auf drei Schüler zu bewegte. Er sammelte all seine Kraft und versuchte sie zu retten, wurde dabei aber selbst vom Lastwagen überfahren und sein Leben, samt seiner guten Vorsätze, endete schlagartig.', price: '12.00' },
        { id: 18, title: 'Hunter × Hunter', image: 'img/Hunter_x_Hunter.jpg', description: 'Gon ist ein kleiner Junge, der die Natur und ihre Geschöpfe liebt. Deshalb möchte er auch ein Hunter werden, genau wie sein Vater. Auf dem Weg zu seinem großen Ziel hat er einige schwere Prüfungen zu bestehen, doch Gon und seine neuen Freunde Kurapika, Leorio und Killua lernen sehr schnell, dass man mehr erreichen kann, wenn man zusammenhält …', price: '12.00' },
        { id: 19, title: 'I Want to Eat Your Pancreas', image: 'img/IWtEYP.jpg', description: 'Haruki Shiga ist ein unsozialer Einzelgänger, der seine Zeit lieber mit Büchern verbringt und in seiner Klasse kein besonders hohes Ansehen genießt. Sakura Yamauchi ist lebensfroh und charakterstark und mit ihrer offenen und sonnigen Persönlichkeit allseits beliebt. Die beiden könnten unterschiedlicher kaum sein und doch werden sie eines Tages unzertrennlich miteinander verbunden. Als Haruki im Krankenhaus darauf wartet, dass er aufgerufen wird, findet er ein kleines Buch – »Leben mit dem Tod« –, ein Tagebuch, dass das tägliche Leben eines sterbenden Menschen beschreibt. Es dauert nicht lang, bis die Besitzerin des Buches auftaucht: seine Klassenkameradin Sakura. Sakura leidet an einer Bauchspeicheldrüsenerkrankung und obwohl medizinische Fortschritte ihr ein fast normales Leben ermöglichen, wird sie bald sterben. Das ist allerdings etwas, das sie all ihren Freunden bisher verheimlicht hat, denn was sie in dieser letzten Zeit auf Erden braucht, ist kein Mitleid, sondern echte Normalität – Normalität, die sie in Haruki findet, der nun von einem »einfachen Klassenkameraden« zu einem »Klassenkameraden, der mein Geheimnis kennt« wird.', price: '12.00' },
        { id: 20, title: 'Akame ga Kill!', image: 'img/Akame_ga_Kill.jpg', description: 'Tatsumi ist ein junger Kämpfer aus einem unter Armut leidenden Dorf des Imperiums. Um sein Dorf finanziell zu unterstützen, macht er sich, mit dem Ziel der Armee beizutreten, auf den Weg zur Hauptstadt des Imperiums. Dort angekommen, muss er jedoch schnell feststellen, dass die Hauptstadt kein so prachtvoller Ort ist, wie in seiner Vorstellung. Mit einem Tritt aus der überlaufenen Kaserne geschmissen und seiner Ersparnisse beraubt, droht Tatsumi seine erste Nacht in der Hauptstadt auf der Straße verbringen zu müssen. Zu seinem Glück wird er von dem wohlhabenden Mädchen Aria aufgelesen, die ihm einen Job als Leibwache anbietet und ihn über den korrupten Zustand des Imperiums aufklärt. Wie schlimm es um das Imperium wirklich steht, sollte Tatsumi jedoch erst herausfinden, als Arias Familie in der Nacht darauf von der Attentäter-Gruppe Night Raid, in deren Reihe sich auch ein junges Mädchen namens Akame befindet, angegriffen wird. Schockiert von den Ereignissen, fasst Tatsumi den Entschluss, sich gegen das Böse innerhalb des Imperiums zu stellen.', price: '12.00' },
        // Weitere Produkte hinzufügen
    ];

    /*
    if (document.getElementById('product-detail')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = allProducts.find(p => p.id == productId);
        if (product) {
            displayProductDetails(product);
        }
    }
    */

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
            // const quantity = parseInt(this.quantity.value);
            // addToCart(product, quantitiy);
        });
    }

    // Scroll-Animation
    const scrollElements = document.querySelectorAll('.scroll-element');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

/*
let cart = [];

function addToCart(product, quantity) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.innerHTML = `
            <span>${item.title} (${item.quantity})</span>
            <span>€${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Gesamt: €${totalPrice.toFixed(2)}`;
}

window.toggleCart = function() {
    const cartContainer = document.getElementById('cart');
    cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none';
};
*/

});