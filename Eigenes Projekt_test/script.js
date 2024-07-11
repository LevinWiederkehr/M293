document.addEventListener('DOMContentLoaded', () => { 

    // Initiales Laden des Warenkorb-UI
    updateCartUI();

    // Sicherstellen, dass Event-Listener für das Warenkorb-Icon hinzugefügt werden
    document.getElementById('cart-icon')?.addEventListener('click', toggleCart);

    // Sicherstellen, dass Event-Listener für das Konto-Icon hinzugefügt werden
    document.getElementById('icon-button')?.addEventListener('click', toggleAccount);

    document.getElementById('register-form').addEventListener('submit', (event) => {
        event.preventDefault();
        registerAccount();
    });

    document.getElementById('logout-button').addEventListener('click', logout);

    // Initiales Laden des Account-UI
    updateAccountUI();
    
    const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', function(event) {

            event.preventDefault();

            const email = document.getElementById("email").value;

            const templateParams = {
                email: 'levin.wiederkehr@edu.tbz.ch', // Test-E-Mail-Adresse
                to_email: email // Ziel-E-Mail-Adresse
            };


            emailjs.send('service_27oreke', 'template_dyu1ka8', templateParams)
                .then(function(response) {
                    alert('Newsletter erfolgreich abonniert!');
                }, function(error) {
                    alert('Es gab einen Fehler beim Abonnieren des Newsletters.');
                });
        });
    } else {
        console.error('Das Formular "newsletter-form" wurde nicht gefunden.');
    }

});

    const trendProducts = [
        { id: 26, title: 'Kaiju No. 8', image: 'img/Kaiju_No_8.jpg', description: 'Riesige, godzilla-artige Lebensformen, genannt Kaiju, machen die Straßen Japans unsicher. Um die Menschheit zu verteidigen, wurde eine militärische Eliteeinheit namens Defense Corps ins Leben gerufen. Ihnen zur Hand gehen die Mitglieder der Professional Kaiju Cleaner Corporation, deren Aufgabe darin besteht, die Überreste der monströsen Wesen zu beseitigen.', price: '12.00' },
        { id: 17, title: 'Mushoku Tensei', image: 'img/Mushoku_Tensei.jpg', description: 'Nachdem ein arbeitsloser 34-jähriger Otaku von seiner Familie aus seinem Haus geworfen wurde und eine Sackgasse im Leben erreicht hat, erinnerte er sich, dass sein Leben tatsächlich viel besser hätte sein können, wenn er in der Vergangenheit bessere Entscheidungen getroffen hätte. Also beschließt er, dass es Zeit ist, ein neues Kapitel in seinem Leben aufzuschlagen. Kaum hatte er diese Entscheidung getroffen, sah er einen Lastwagen, der sich mit hoher Geschwindigkeit auf drei Schüler zu bewegte. Er sammelte all seine Kraft und versuchte sie zu retten, wurde dabei aber selbst vom Lastwagen überfahren und sein Leben, samt seiner guten Vorsätze, endete schlagartig.', price: '12.00' },
        { id: 5, title: 'Solo Leveling', image: 'img/Solo_Leveling.jpg', description: 'In »Solo Leveling« geht es um eine Welt, in der sich vor zehn Jahren sogenannte »Gates« öffneten, die eine Verbindung zwischen der realen Welt und der der Monster darstellen. Gleichzeitig mit der Öffnung der »Gates« erhielten manche Menschen besondere Fähigkeiten, die es ihnen erlaubten, die Monster zu jagen, die aus diesen Gates kamen. Diese Menschen werden als »Hunter« bezeichnet. Jedoch sind nicht alle »Hunter« stark, manche können ihre Fähigkeiten auch einfach nicht weiter trainieren.', price: '24.90' },
        { id: 31, title: 'Gachiakuta', image: 'img/Gachiakuta.jpg', description: 'In einer Stadt, in der die Armen und Reichen durch hohe Mauern voneinander getrennt werden, gibt es nur einen Ort, an dem die Armen noch weniger leben wollen als in den Slums: den Abyss. Ein Ort, der den Bewohnern der Stadt nur als Müllhalde, sondern auch als Verbannungsort für Verbrecher dient. Der Waisenjunge Rudo versucht sich und seinen Ziehvater mit kriminellen Aktivitäten über Wasser zu halten, auch wenn letzterer ihn bittet, damit aufzuhören. Eines Tages kommt Rudo nach Hause und findet seinen Vater ermordet vor. Als wäre das nicht schon schlimm genug, wird ihm der Mord angehängt und er wird in den Abyss verbannt …', price: '12.00' },
        { id: 1, title: 'Berserk', image: 'img/Berserk.jpg', description: 'Ein gewaltiges Schwert schulternd, das seine hünenhafte Gestalt noch überragte, eine linke Hand, aus dem härtesten Stahl geschmiedet, ein schwarzer Umgang, der ihn umhüllte, das war die Erscheinung des Schwertkämpfers, der sich Guts nannte. Er war auf dem Weg zu einem Ort, wo das Blut aus dicken Wolken herniederprasselte, und wo nicht Felsen, sondern Leichen sich zu Bergen auftürmten. Die kleine Elfe Puck, die ihn, seit er sie aus höchster Gefahr gerettet hatte, umschwebt und hinterherflattert, ist entzückt von seiner gewaltigen Kraft, aber andererseits graut ihr auch vor der Grausamkeit der Welt, in der Guts zu Hause ist. Auf dem Weg bösartige Dämonenhorden und an Guts Hals ein Brandmal, das sie immer wieder zum ihm führt!', price: '21.90' },
        { id: 32, title: 'Nagatoro-san', image: 'img/Nagatoro-san.jpg', description: 'Nagatoro, die den ersten Jahrgang der Oberschule besucht, sitzt eines Tages nach der Schule noch mit ihren Freundinnen in der Bibliothek zusammen, als ihnen durch ein Missgeschick eines Mitschülers des zweiten Jahrgangs dessen selbst gezeichneter Manga in die Hände fällt. Nachdem die Freundinnen sich über Stil und Aussage des Mangas ordentlich lustig gemacht haben, verbleibt später nur Nagatoro im Raum. Ihr war die Geschichte anscheinend nicht so egal wie dem Rest der Gruppe, und sie scheint auch etwas auf dem Herzen zu haben. Was sich daraufhin zwischen den beiden in der sonst menschenleeren Bibliothek abspielt, hätte sich ihr Senpai nicht im Geringsten träumen lassen.', price: '12.00' },
        { id: 33, title: 'Oshi no Ko', image: 'img/Oshi_no_Ko.jpg', description: 'Durch seine leider verstorbene Patientin Sarina wurde der Arzt Goro Amemiya ein Riesenfan des Idols Ai Hoshino. Er hätte sich jedoch niemals gedacht, dass er sie eines Tages live sehen würde. Und doch: Zusammen mit ihrem Manager steht sie nun vor ihm … schwanger?! Ai dachte, ein Arzt in einer ländlichen Gegend würde sie nicht kennen und reiste extra von Tokio an. Obwohl Goro ein Hardcorefan ist, vertraut sie ihm als Arzt die Geburt ihrer Zwillinge an. Tage, Wochen, Monate vergehen und die Geburt ihrer Kinder steht endlich an. Der Traum einer Familie ist zum Greifen nah! Allerdings geschieht ein großes Unglück: Goro wird von einem Stalker ermordet …', price: '12.00' },
        { id: 30, title: 'Sousou no Frieren', image: 'img/Frieren.jpg', description: 'Nach zehn langen, anstrengenden Jahren hat die Heldengruppe es geschafft: Der Dämonenkönig ist Geschichte! Die Gruppe, bestehend aus dem Helden Himmel, dem Zwergenkrieger Eisen, dem Pastor Heiter und der Elfenmagierin Frieren, kehrt nun als Helden nach Hause zurück. Da erscheint es bei ihrer ausgelassenen Feier zu einem Erä-Meteorschauer, der nur alle 50 Jahre wieder kommt. Angespornt von Frieren, die einen besseren Ort zum Schauen kennt, versprechen sich alle zum nächsten Meteorschauer nochmals zusammenzukommen.', price: '12.00' },
        { id: 34, title: 'My Hero Academia', image: 'img/My_Hero_Academia.jpg', description: 'Menschen sind von Geburt an nicht alle gleich. Das hat der damals vierjährige Izuku Midoriya mitbekommen, als er von seinen Mitschülern, die alle Superkräfte besitzen, gemobbt wurde. Izuku gehört zu den wenigen Menschen, die ohne Superkräfte geboren wurden. Dieses Schicksal hat ihn jedoch nicht daran gehindert, seinen Traum zu verfolgen – den Traum, ein großer Superheld zu werden wie der legendäre Held All Might. Um ein Held zu werden, möchte er unbedingt einer Heldenschule beitreten – und zwar der angesehensten Heldenschule im gesamten Land. Mit der Hilfe seines Idols All Might versucht er nun, in der Schule angenommen und zu einem großartigen Superhelden zu werden.', price: '12.00' },
        { id: 35, title: 'Konosuba!', image: 'img/Konosuba.jpg', description: 'Als der Schüler und Gamer Kazuma Satou eines Tages von seinem Einkauf zurückkehrt, erblickt er wie ein Mädchen beinahe von einem Traktor überfahren wird. Prompt versucht er sie zu retten, stirbt dabei jedoch selbst. Als er wieder erwacht, steht vor ihm ein Mädchen mit blauem Haar, das sich ihm als Göttin vorstellt. Sie gewährt ihm ein neues „Leben“ in einer Welt, die sich gänzlich von seiner altbekannten unterscheidet. Jedoch darf er nur eine Sache in diese Welt mit sich nehmen. Nach langem Überlegen entscheidet Kazuma sich dazu, die Göttin selbst zu wählen. Überrascht wird diese mit ihm zusammen in die neue Welt transportiert, in der sie sich gleich auf die Suche nach einer Unterkunft und nach etwas zu essen machen. Doch werden die beiden es schaffen, gemeinsam ihr neues Leben zu beschreiten …?', price: '12.00' },
        // Weitere Produkte hinzufügen
    ]
    
    const bestProducts = [
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

    const newProducts = [
        { id: 21, title: 'Jujutsu Kaisen', image: 'img/Jujutsu_Kaisen.jpg', description: 'Oberschüler Yuji ist eher unauffällig, aber hinter seiner unscheinbaren Fassade verbirgt sich eine ungeheure Kraft. Die Sportklubs der Schule träumen davon, dass Yuji bei ihnen Mitglied wird, doch der hängt lieber mit den Spinnern vom Klub für Paranormales ab, damit er mehr Zeit hat, sich um seinen bettlägerigen Opa zu kümmern. Eines Tages bekommen die Mitglieder des Klubs ein versiegeltes, verfluchtes Objekt in die Finger. Als sie das Siegel öffnen, ahnen sie nicht, welchen Horror sie damit heraufbeschwören …', price: '12.00' },
        { id: 22, title: 'Chainsaw Man', image: 'img/Chainsaw_Man.jpg', description: 'Denjis Leben ist nicht einfach: Er hat von seinem Vater einen gigantischen Schuldenberg geerbt und verbringt sein trauriges, armes Leben mit einem einzigen Freund – dem kleinen Teufelchen Pochita. Er würde alles für Geld machen – selbst die Jagd auf Dämonen! Sein letzter Auftrag läuft allerdings nicht so wie erwartet, da sein Auftraggeber ihn in einen Hinterhalt gelockt hat. Dem Tod nahe, fusioniert sich Pochita mit seinem Herrchen, sodass Denji überleben kann. Durch die Vereinigung mit dem Teufel bekommt Denji jedoch ungeahnte Kräfte, weswegen er sich von da an in den Kettensägenteufel Chainsaw Man verwandeln kann. Mit diesen neuen Kräften ausgestattet, macht er sich daran, noch mehr Geld zu verdienen. Doch dann wird auch eine Sondereinheit auf den jungen Mann aufmerksam und bietet ihm an, dort als Teufelsjäger zu arbeiten. Ein neues Leben als Mitglied der Teufelsabwehr-Sondereinheit Nr. 4 steht ihm nun bevor!', price: '12.00' },
        { id: 23, title: 'Spy × Family', image: 'img/Spy_x_Family.jpg', description: 'Um den Frieden in der Gesellschaft aufrechtzuerhalten, setzt Meisterspion Twilight täglich sein Leben aufs Spiel, aber der neue Auftrag stellt ihn vor eine ganz neue Herausforderung: Um einem verdächtigen Politiker näherzukommen, soll Twilight binnen einer Woche eine Familie gründen und sein Kind auf dieselbe Privatschule schicken, die auch der Sohn seiner Zielperson besucht. Damit kann Twilight ohne Aufsehen zu erregen in Kontakt mit dem misstrauischen Politiker kommen. So weit der Plan, aber wo soll er auf die Schnelle eine Frau und ein Kind herbekommen?', price: '12.00' },
        { id: 24, title: 'Dr. Stone', image: 'img/Dr_Stone.jpg', description: 'Eines Tages war Taiju Ooki endlich bereit, seinem Schwarm Yuzuriha seine Liebe zu gestehen. Als er endlich bereit war, die Worte zu sagen, geht die Welt unter und alle Menschen werden auf unbekannte Weise versteinert. Während tausenden von Jahren behält der versteinerte Taiju weiterhin seine Entschlossenheit und denkt all die Jahre an Yuzuhira. Am 5. Oktober 5738 erwacht Taiju und kommt aus seiner Steinhülle raus. Er findet heraus, dass sein bester Freund Senkuu auch überlebt hat und die beiden entschließen sich, die Zivilisation von null zusammen wieder aufzubauen.', price: '12.00' },
        { id: 25, title: 'Undead Unluck', image: 'img/Undead_Unluck.jpg', description: 'Als ein vom Glück verlassenes Mädchen sich eben mit ihrem baldigen Tod abgefunden hat, taucht vor ihr ein Untoter auf, der nichts sehnlicher will als sterben! Er ist bösartig, gewalttätig und vor allem – splitternackt! Wie soll das bloß ausgehen?', price: '12.00' },
        { id: 26, title: 'Kaiju No. 8', image: 'img/Kaiju_No_8.jpg', description: 'Riesige, godzilla-artige Lebensformen, genannt Kaiju, machen die Straßen Japans unsicher. Um die Menschheit zu verteidigen, wurde eine militärische Eliteeinheit namens Defense Corps ins Leben gerufen. Ihnen zur Hand gehen die Mitglieder der Professional Kaiju Cleaner Corporation, deren Aufgabe darin besteht, die Überreste der monströsen Wesen zu beseitigen.', price: '12.00' },
        { id: 27, title: 'Mashle', image: 'img/Mashle.jpg', description: 'Der junge und machtlose Mash Burndead ist eine Bedrohung für den Genpool einer von Magie dominierten Welt und muss beseitigt werden. Heimlich in einem Wald lebend verbringt er seine Tage damit, seinen Körper zu trainieren und Muskeln aufzubauen, damit er stark genug wird, um den Magiern ein Konkurrent zu sein! Als jedoch seine Identität entlarvt und sein friedliches Leben bedroht wird, beginnt Mash seine Reise, um ein sogenannter »göttlicher Visionär« zu werden – eine Rolle, die so mächtig ist, dass die Gesellschaft keine andere Wahl hat, als seine Existenz zu akzeptieren.', price: '12.00' },
        { id: 28, title: 'Hell\'s Paradise', image: 'img/Hells_Paradise.jpg', description: 'Während der Regentschaft des elften Tokugawa-Shoguns (1787–1837) wird der einst als stärkster Shinobi gefürchtete Gabimaru als Abtrünniger festgenommen und für seine Taten zum Tode verurteilt. Welche Exekutionsmethode jedoch auch angewandt wird, Gabimaru trägt nie die Spur einer Verletzung davon. Von der Scharfrichterin Sagiri Yamada Asaemon wird er daraufhin mit der Bedingung des Shogunats für eine vollständige Amnestie konfrontiert. Diese besteht darin, in das sagenumwobene Land der Götter zu reisen und das Elixir der ewigen Jugend zu finden …', price: '12.00' },
        { id: 29, title: 'Tokyo Revengers', image: 'img/Tokyo_Revengers.jpg', description: 'Takemichi Hanagaki ist bereits am Tiefpunkt seines Lebens angelangt: Er wohnt in einer Drecksbude, arbeitet einen schlecht bezahlten Teilzeitjob, um sich über Wasser zu halten, und ist ein erbärmlicher Junggeselle. Doch es wird noch schlimmer, als er von dem Tod von Hinata Tachibana, seiner Freundin aus Mittelschulzeiten, erfährt, die von der berühmt-berüchtigten Tokyo Manji Gang getötet wurde, denn auch sein Leben schwebt in Gefahr! Bereits einen Tag nach der Ausstrahlung der schrecklichen Nachrichten wird er am Bahnsteig von einem Unbekannten auf die Gleise gestoßen … und erwacht zu seinem Erstaunen als Mittelschüler wieder. Nun, zwölf Jahre in der Vergangenheit, beschließt er gemeinsam mit Hinatas Bruder Naoto, die Zukunft zu verändern und so Hinata vor ihrem tragischen Tod zu retten. Sein Plan: die Tokyo Manji Gang infiltrieren, einen der Bosse befreunden und das Schicksal umschreiben!', price: '12.00' },
        { id: 30, title: 'Sousou no Frieren', image: 'img/Frieren.jpg', description: 'Nach zehn langen, anstrengenden Jahren hat die Heldengruppe es geschafft: Der Dämonenkönig ist Geschichte! Die Gruppe, bestehend aus dem Helden Himmel, dem Zwergenkrieger Eisen, dem Pastor Heiter und der Elfenmagierin Frieren, kehrt nun als Helden nach Hause zurück. Da erscheint es bei ihrer ausgelassenen Feier zu einem Erä-Meteorschauer, der nur alle 50 Jahre wieder kommt. Angespornt von Frieren, die einen besseren Ort zum Schauen kennt, versprechen sich alle zum nächsten Meteorschauer nochmals zusammenzukommen.', price: '12.00' },
        // Weitere Produkte hinzufügen
    ]

    const allProducts = [
        { id: 1, title: 'Berserk', image: 'img/Berserk.jpg', description: 'Ein gewaltiges Schwert schulternd, das seine hünenhafte Gestalt noch überragte, eine linke Hand, aus dem härtesten Stahl geschmiedet, ein schwarzer Umgang, der ihn umhüllte, das war die Erscheinung des Schwertkämpfers, der sich Guts nannte. Er war auf dem Weg zu einem Ort, wo das Blut aus dicken Wolken herniederprasselte, und wo nicht Felsen, sondern Leichen sich zu Bergen auftürmten. Die kleine Elfe Puck, die ihn, seit er sie aus höchster Gefahr gerettet hatte, umschwebt und hinterherflattert, ist entzückt von seiner gewaltigen Kraft, aber andererseits graut ihr auch vor der Grausamkeit der Welt, in der Guts zu Hause ist. Auf dem Weg bösartige Dämonenhorden und an Guts Hals ein Brandmal, das sie immer wieder zum ihm führt!', price: '21.90', genres: ['Dark Fantasy'] },
        { id: 2, title: 'One Piece', image: 'img/One_Piece.jpg', description: 'Reichtum, Macht und Ruhm. Der Mann, der sich dies alles erkämpft hatte, war Gold Roger, der König der Piraten. Als er hingerichtet wurde, waren seine letzten Worte: »Ihr wollt meinen Schatz? Den könnt ihr haben! Sucht ihn doch! Irgendwo habe ich den größten Schatz der Welt versteckt.« Dieser Schatz ist das One Piece und er liegt irgendwo auf der Grandline. Damit brach das große Piratenzeitalter an …', price: '11.90', genres: ['Abenteuer'] },
        { id: 3, title: 'Death Note', image: 'img/Death_Note.jpg', description: 'Light Yagami geht in die Oberschule und steht kurz vor den schwierigen Aufnahmeprüfungen für Japans Elite-Universitäten. Doch das ist für Light keine große Herausforderung. Schließlich ist er mit so überdurchschnittlicher Intelligenz gesegnet, dass er alle Prüfungen stets mit Bravour besteht, und außerdem ist er fleißig und gewissenhaft. Doch eines Tages findet er auf dem Schulhof ein rätselhaftes Notizbuch. Es handelt sich um ein sogenanntes »Death Note«. Wenn man den Namen eines Menschen in das Buch schreibt, stirbt dieser Mensch. Light findet nicht nur Genaueres über die genaue Vorgehensweise heraus, sondern trifft auch bald auf den ursprünglichen Besitzer des Buches: einen Todesgott.', price: '11.90', genres: ['Psychothriller'] },
        { id: 4, title: 'Fullmetal Alchemist', image: 'img/Fullmetal_Alchemist.jpg', description: 'In »Fullmetal Alchemist« versuchen die zwei Brüder Ed und Alphonse Elric, ihre tote Mutter mittels Alchemie wieder ins Leben zurück zu holen. Eine Entscheidung, für die sie einen hohen Preis zahlen müssen: Als Körper stirbt, aber seinem Bruder gelingt es in letzter Sekunde seine Seele an eine Ritterrüstung zu binden. Dafür verliert er ein Bein und einen Arm. Nachdem seine fehlenden Gliedmaßen durch Prothesen aus Metall ersetzt wurden, begeben sich die beiden auf die Suche nach dem Stein der Weisen, ein mythisches Objekt, von dem behauptet wird, es könne Unmögliches möglich machen – auch die Wiederherstellung der ursprünglichen Körper von Ed und Al. Ein langes Abenteuer beginnt in dem sich die beiden Brüder nicht nur einigen Gefahren stellen müssen sondern auch schreckliche Geheimnisse lüften, die auch ihren Vater betreffen …', price: '8.90', genres: ['Abenteuer', 'Fantasy'] },
        { id: 5, title: 'Solo Leveling', image: 'img/Solo_Leveling.jpg', description: 'In »Solo Leveling« geht es um eine Welt, in der sich vor zehn Jahren sogenannte »Gates« öffneten, die eine Verbindung zwischen der realen Welt und der der Monster darstellen. Gleichzeitig mit der Öffnung der »Gates« erhielten manche Menschen besondere Fähigkeiten, die es ihnen erlaubten, die Monster zu jagen, die aus diesen Gates kamen. Diese Menschen werden als »Hunter« bezeichnet. Jedoch sind nicht alle »Hunter« stark, manche können ihre Fähigkeiten auch einfach nicht weiter trainieren.', price: '24.90', genres: ['Action', 'Fantasy'] },
        { id: 6, title: 'Monster', image: 'img/Monster.jpg', description: 'Deutschland, 1986. Dr. Kenzo Tenma ist Neurochirurg in einer Düsseldorfer Klinik. Eigentlich ist es der perfekte Job für einen Arzt wie ihn, wenn es da nicht seine Vorgesetzen gäbe. Mehrfach muss er einflussreiche Patienten bei der medizinischen Versorgung vorziehen.', price: '10.00', genres: ['Thriller', 'Psychologischer Horror'] },
        { id: 7, title: 'The Breaker: New Waves', image: 'img/The_Breaker_New_Waves.jpg', description: 'Nachdem sein Ki-Zentrum von seinem Meister zerstört wurde, verlässt Shi-Woon die Welt der Murim, um ein normales Leben zu führen, welches ihm sein Meister ermöglichen wollte. Aber für jemanden, der das Phönix-Medaillon des Sun-Woo-Klans und die Kenntnis über die »Black Heaven & Earth«-Technik besitzt, wird die Welt der Murim ihn nicht so einfach gehen lassen …', price: '18.00', genres: ['Action', 'Drama'] },
        { id: 8, title: 'Spice & Wolf', image: 'img/Spice_Wolf.jpg', description: 'Kraft Lawrence ist ein umherziehender Händler, der davon lebt, seine Waren in immer neuen Städten zu verkaufen. Eines Tages kommt er mal wieder in die Stadt Pasroe, wo zurzeit ein Erntefest stattfindet. Die Einwohner feiern dieses Fest jedes Jahr, um so der Erntegöttin Holo zu danken. Doch in dieser Nacht findet Lawrence in seinem Wagen ein Mädchen mit Wolfsohren, das sich später als ebenjene Wolfsgöttin entpuppt – Holo. Sie will sich Lawrence anschließen, um zurück in ihre alte Heimat zu gelangen, doch der scheint von dieser Idee nicht sonderlich begeistert zu sein …', price: '19.90', genres: ['Fantasy', 'Romanze'] },
        { id: 9, title: 'Your Name.', image: 'img/Your_Name.jpg', description: 'Mitsuha lebt in einem Dorf in den Bergen, sehnt sich aber nach einem aufregenden Leben in der Stadt. So sehr, dass sie eines Nachts sogar beginnt davon zu träumen: Im Schlaf ist sie Taki, ein Junge aus der Metropole Tokio. Als aus dem Traum plötzlich Realität wird und Mitsuha in Takis Körper aufwacht, ist sie vollkommen verwirrt. Wer ist dieser Junge? Was macht sie in seinem Körper? Und vor allem: Wie kann sie das wieder umkehren? Eine berührende Liebesgeschichte durch Zeit und Raum nimmt ihren Lauf …', price: '35.10', genres: ['Romanze', 'Fantasy'] },
        { id: 10, title: 'Nana', image: 'img/Nana.jpg', description: 'Nana Komatsu, aufgewachsen in einer entlegenen Kleinstadt, träumt seit jeher von der großen Liebe, doch ihre bisherige Auswahl an Männern, nämlich überwiegend Erwachsene, wie zum Beispiel ihrer Kunstlehrer, hat dafür gesorgt, dass ihr Liebesleben in der Oberschule zwar nicht eintönig, aber keineswegs zufriedenstellend war. Als sie den attraktiven Shouji kennenlernt, könnte daraus was werden, aber das Schicksal hat andere Pläne, denn während ihre beste Freundin Junko und auch ihr Shouji zwecks Studium nach Tokio gehen, muss sie aufgrund ihrer vergeigten Aufnahmeprüfung zurückzubleiben und erst einmal Geld zu verdienen.', price: '16.90', genres: ['Romanze', 'Drama'] },
        { id: 11, title: 'One-Punch Man', image: 'img/One-Punch_Man.jpg', description: 'In einer Welt, in der Superhelden nichts Außergewöhnliches sind und theoretisch jeder einer werden kann, hat Saitama ein kurioses Hobby: Superheld sein. Doch Saitama ist kein gewöhnlicher Mensch, der nur Superheld spielt, denn aufgrund seines ganz persönlichen Trainings ist er mittlerweile so stark geworden, dass er jeden Gegner buchstäblich mit nur einem einzigen Schlag in die Knie zwingt. Das hat aber dazu geführt, dass er beim Kämpfen kaum noch Nervenkitzel verspürt, und da ihn auch niemand wirklich beachtet oder ihm Anerkennung verleiht, verfällt er in eine existentielle Krise – einfach nichts macht ihm mehr Spaß.', price: '12.00', genres: ['Action', 'Comedy', 'Superhelden'] },
        { id: 12, title: 'Elfen Lied', image: 'img/Elfen_Lied.jpg', description: 'Lucy tötet jeden Menschen, der in ihre Nähe kommt, sofort. Sie ist eine Mutantin mit abnormen Fähigkeiten, die in einem Forschungslabor unter strengsten Sicherheitsvorkehrungen festgehalten wird. Dennoch gelingt es ihr eines Tages zu fliehen. Wenig später finden der Student Kouta und seine Cousine Yuka am Strand ein hilfloses Mädchen. Da es sein Gedächtnis verloren zu haben scheint, nehmen die zwei sich ihm an … Ist es nur eine Frage der Zeit, bis Lucy ihnen ihr mörderisches Gesicht zeigt?', price: '12.00', genres: ['Horror', 'Science-Fiction'] },
        { id: 13, title: 'Tokyo Ghoul', image: 'img/Tokyo_Ghoul.jpg', description: 'Dem Tod gerade noch mal von der Schippe gesprungen, erwacht Oberschüler Ken als Ghul wieder. Zuerst ist alles normal. Doch dann beginnt er, Appetit auf Menschen zu entwickeln ‒ was einige moralische Fragen aufwirft. Ken würde sich lieber umbringen, als Menschen zu fressen. So weit kommt es aber gar nicht, denn offenbar gibt es noch andere wie ihn. Eine geheime Gesellschaft der Ghule lebt längst unter uns.', price: '12.00', genres: ['Dark Fantasy', 'Horror'] },
        { id: 14, title: 'Attack on Titan', image: 'img/Attack_on_Titan.jpg', description: 'Mehrere hundert Jahre zuvor wurde die Menschheit beinahe von Titanen ausgerottet. Sie sind riesengroß, verfügen über wenig Intelligenz und scheinen Menschen nur des Vergnügens wegen zu fressen. Ein kleiner Prozentsatz an Menschen überlebte, indem sie sich hinter drei großen Mauern verschanzten, die größer als die größten Titanen sind. Seit über 100 Jahren hat kein Mensch mehr innerhalb der Mauern einen Titanen gesehen.', price: '12.00', genres: ['Dark Fantasy'] },
        { id: 15, title: 'Gintama', image: 'img/Gintama.jpg', description: 'Die große Ära der Samurai neigt sich dem Ende zu und es ist streng verboten, Schwerter zu tragen. Nur ein junger Mann hält an der „Seele der Samurai“ fest: Gintoki Sakata, ein „Freischaffender“, der für Geld so ziemlich jeden Job erledigt. Und Jobs gibt es genug, seit die außerirdischen „Amanto“ auf die Erde gekommen sind und heimlich die Macht an sich reißen wollen. Bewaffnet mit einem Holzschwert, schlägt sich Gintoki durch diese neue Zeit und lässt dabei keine Gelegenheit aus, Außerirdische, Menschen und natürlich sich selbst zielsicher in schräge Abenteuer zu treiben.', price: '12.00', genres: ['Action', 'Comedy'] },
        { id: 16, title: 'A Silent Voice', image: 'img/A_Silent_Voice.jpg', description: 'Shouya Ishida ist ein sehr aktives Kind. Mit seinen Freunden veranstaltet er regelmäßig Mutproben, um sich zu beweisen. Das Schulleben findet er langweilig und kann nicht verstehen, warum seine Freunde immer öfter von ihm verlangen, erwachsen zu werden. Als eines Tages das hörgeschädigte Mädchen Shouko Nishimiya in seine Klasse kommt, macht es ihm erst Spaß, sie zu ärgern; doch da ist scheinbar mehr …', price: '12.00', genres: ['Drama'] },
        { id: 17, title: 'Mushoku Tensei', image: 'img/Mushoku_Tensei.jpg', description: 'Nachdem ein arbeitsloser 34-jähriger Otaku von seiner Familie aus seinem Haus geworfen wurde und eine Sackgasse im Leben erreicht hat, erinnerte er sich, dass sein Leben tatsächlich viel besser hätte sein können, wenn er in der Vergangenheit bessere Entscheidungen getroffen hätte. Also beschließt er, dass es Zeit ist, ein neues Kapitel in seinem Leben aufzuschlagen. Kaum hatte er diese Entscheidung getroffen, sah er einen Lastwagen, der sich mit hoher Geschwindigkeit auf drei Schüler zu bewegte. Er sammelte all seine Kraft und versuchte sie zu retten, wurde dabei aber selbst vom Lastwagen überfahren und sein Leben, samt seiner guten Vorsätze, endete schlagartig.', price: '12.00', genres: ['Isekai', 'Fantasy'] },
        { id: 18, title: 'Hunter × Hunter', image: 'img/Hunter_x_Hunter.jpg', description: 'Gon ist ein kleiner Junge, der die Natur und ihre Geschöpfe liebt. Deshalb möchte er auch ein Hunter werden, genau wie sein Vater. Auf dem Weg zu seinem großen Ziel hat er einige schwere Prüfungen zu bestehen, doch Gon und seine neuen Freunde Kurapika, Leorio und Killua lernen sehr schnell, dass man mehr erreichen kann, wenn man zusammenhält …', price: '12.00', genres: ['Abenteuer', 'Fantasy'] },
        { id: 19, title: 'I Want to Eat Your Pancreas', image: 'img/IWtEYP.jpg', description: 'Haruki Shiga ist ein unsozialer Einzelgänger, der seine Zeit lieber mit Büchern verbringt und in seiner Klasse kein besonders hohes Ansehen genießt. Sakura Yamauchi ist lebensfroh und charakterstark und mit ihrer offenen und sonnigen Persönlichkeit allseits beliebt. Die beiden könnten unterschiedlicher kaum sein und doch werden sie eines Tages unzertrennlich miteinander verbunden. Als Haruki im Krankenhaus darauf wartet, dass er aufgerufen wird, findet er ein kleines Buch – »Leben mit dem Tod« –, ein Tagebuch, dass das tägliche Leben eines sterbenden Menschen beschreibt. Es dauert nicht lang, bis die Besitzerin des Buches auftaucht: seine Klassenkameradin Sakura. Sakura leidet an einer Bauchspeicheldrüsenerkrankung und obwohl medizinische Fortschritte ihr ein fast normales Leben ermöglichen, wird sie bald sterben. Das ist allerdings etwas, das sie all ihren Freunden bisher verheimlicht hat, denn was sie in dieser letzten Zeit auf Erden braucht, ist kein Mitleid, sondern echte Normalität – Normalität, die sie in Haruki findet, der nun von einem »einfachen Klassenkameraden« zu einem »Klassenkameraden, der mein Geheimnis kennt« wird.', price: '12.00', genres: ['Drama', 'Romanze'] },
        { id: 20, title: 'Akame ga Kill!', image: 'img/Akame_ga_Kill.jpg', description: 'Tatsumi ist ein junger Kämpfer aus einem unter Armut leidenden Dorf des Imperiums. Um sein Dorf finanziell zu unterstützen, macht er sich, mit dem Ziel der Armee beizutreten, auf den Weg zur Hauptstadt des Imperiums. Dort angekommen, muss er jedoch schnell feststellen, dass die Hauptstadt kein so prachtvoller Ort ist, wie in seiner Vorstellung. Mit einem Tritt aus der überlaufenen Kaserne geschmissen und seiner Ersparnisse beraubt, droht Tatsumi seine erste Nacht in der Hauptstadt auf der Straße verbringen zu müssen. Zu seinem Glück wird er von dem wohlhabenden Mädchen Aria aufgelesen, die ihm einen Job als Leibwache anbietet und ihn über den korrupten Zustand des Imperiums aufklärt. Wie schlimm es um das Imperium wirklich steht, sollte Tatsumi jedoch erst herausfinden, als Arias Familie in der Nacht darauf von der Attentäter-Gruppe Night Raid, in deren Reihe sich auch ein junges Mädchen namens Akame befindet, angegriffen wird. Schockiert von den Ereignissen, fasst Tatsumi den Entschluss, sich gegen das Böse innerhalb des Imperiums zu stellen.', price: '12.00', genres: ['Action', 'Dark Fantasy'] },
        { id: 21, title: 'Jujutsu Kaisen', image: 'img/Jujutsu_Kaisen.jpg', description: 'Oberschüler Yuji ist eher unauffällig, aber hinter seiner unscheinbaren Fassade verbirgt sich eine ungeheure Kraft. Die Sportklubs der Schule träumen davon, dass Yuji bei ihnen Mitglied wird, doch der hängt lieber mit den Spinnern vom Klub für Paranormales ab, damit er mehr Zeit hat, sich um seinen bettlägerigen Opa zu kümmern. Eines Tages bekommen die Mitglieder des Klubs ein versiegeltes, verfluchtes Objekt in die Finger. Als sie das Siegel öffnen, ahnen sie nicht, welchen Horror sie damit heraufbeschwören …', price: '12.00', genres: ['Action', 'Fantasy'] },
        { id: 22, title: 'Chainsaw Man', image: 'img/Chainsaw_Man.jpg', description: 'Denjis Leben ist nicht einfach: Er hat von seinem Vater einen gigantischen Schuldenberg geerbt und verbringt sein trauriges, armes Leben mit einem einzigen Freund – dem kleinen Teufelchen Pochita. Er würde alles für Geld machen – selbst die Jagd auf Dämonen! Sein letzter Auftrag läuft allerdings nicht so wie erwartet, da sein Auftraggeber ihn in einen Hinterhalt gelockt hat. Dem Tod nahe, fusioniert sich Pochita mit seinem Herrchen, sodass Denji überleben kann. Durch die Vereinigung mit dem Teufel bekommt Denji jedoch ungeahnte Kräfte, weswegen er sich von da an in den Kettensägenteufel Chainsaw Man verwandeln kann. Mit diesen neuen Kräften ausgestattet, macht er sich daran, noch mehr Geld zu verdienen. Doch dann wird auch eine Sondereinheit auf den jungen Mann aufmerksam und bietet ihm an, dort als Teufelsjäger zu arbeiten. Ein neues Leben als Mitglied der Teufelsabwehr-Sondereinheit Nr. 4 steht ihm nun bevor!', price: '12.00', genres: ['Action', 'Horror'] },
        { id: 23, title: 'Spy × Family', image: 'img/Spy_x_Family.jpg', description: 'Um den Frieden in der Gesellschaft aufrechtzuerhalten, setzt Meisterspion Twilight täglich sein Leben aufs Spiel, aber der neue Auftrag stellt ihn vor eine ganz neue Herausforderung: Um einem verdächtigen Politiker näherzukommen, soll Twilight binnen einer Woche eine Familie gründen und sein Kind auf dieselbe Privatschule schicken, die auch der Sohn seiner Zielperson besucht. Damit kann Twilight ohne Aufsehen zu erregen in Kontakt mit dem misstrauischen Politiker kommen. So weit der Plan, aber wo soll er auf die Schnelle eine Frau und ein Kind herbekommen?', price: '12.00', genres: ['Action', 'Comedy'] },
        { id: 24, title: 'Dr. Stone', image: 'img/Dr_Stone.jpg', description: 'Eines Tages war Taiju Ooki endlich bereit, seinem Schwarm Yuzuriha seine Liebe zu gestehen. Als er endlich bereit war, die Worte zu sagen, geht die Welt unter und alle Menschen werden auf unbekannte Weise versteinert. Während tausenden von Jahren behält der versteinerte Taiju weiterhin seine Entschlossenheit und denkt all die Jahre an Yuzuhira. Am 5. Oktober 5738 erwacht Taiju und kommt aus seiner Steinhülle raus. Er findet heraus, dass sein bester Freund Senkuu auch überlebt hat und die beiden entschließen sich, die Zivilisation von null zusammen wieder aufzubauen.', price: '12.00', genres: ['abenteuer', 'Science-Fiction'] },
        { id: 25, title: 'Undead Unluck', image: 'img/Undead_Unluck.jpg', description: 'Als ein vom Glück verlassenes Mädchen sich eben mit ihrem baldigen Tod abgefunden hat, taucht vor ihr ein Untoter auf, der nichts sehnlicher will als sterben! Er ist bösartig, gewalttätig und vor allem – splitternackt! Wie soll das bloß ausgehen?', price: '12.00', genres: ['Action', 'Fantasy'] },
        { id: 26, title: 'Kaiju No. 8', image: 'img/Kaiju_No_8.jpg', description: 'Riesige, godzilla-artige Lebensformen, genannt Kaiju, machen die Straßen Japans unsicher. Um die Menschheit zu verteidigen, wurde eine militärische Eliteeinheit namens Defense Corps ins Leben gerufen. Ihnen zur Hand gehen die Mitglieder der Professional Kaiju Cleaner Corporation, deren Aufgabe darin besteht, die Überreste der monströsen Wesen zu beseitigen.', price: '12.00', genres: ['Action', 'Fantasy'] },
        { id: 27, title: 'Mashle', image: 'img/Mashle.jpg', description: 'Der junge und machtlose Mash Burndead ist eine Bedrohung für den Genpool einer von Magie dominierten Welt und muss beseitigt werden. Heimlich in einem Wald lebend verbringt er seine Tage damit, seinen Körper zu trainieren und Muskeln aufzubauen, damit er stark genug wird, um den Magiern ein Konkurrent zu sein! Als jedoch seine Identität entlarvt und sein friedliches Leben bedroht wird, beginnt Mash seine Reise, um ein sogenannter »göttlicher Visionär« zu werden – eine Rolle, die so mächtig ist, dass die Gesellschaft keine andere Wahl hat, als seine Existenz zu akzeptieren.', price: '12.00', genres: ['Action', 'Comedy'] },
        { id: 28, title: 'Hell\'s Paradise', image: 'img/Hells_Paradise.jpg', description: 'Während der Regentschaft des elften Tokugawa-Shoguns (1787–1837) wird der einst als stärkster Shinobi gefürchtete Gabimaru als Abtrünniger festgenommen und für seine Taten zum Tode verurteilt. Welche Exekutionsmethode jedoch auch angewandt wird, Gabimaru trägt nie die Spur einer Verletzung davon. Von der Scharfrichterin Sagiri Yamada Asaemon wird er daraufhin mit der Bedingung des Shogunats für eine vollständige Amnestie konfrontiert. Diese besteht darin, in das sagenumwobene Land der Götter zu reisen und das Elixir der ewigen Jugend zu finden …', price: '12.00', genres: ['Action', 'Dark Fantasy'] },
        { id: 29, title: 'Tokyo Revengers', image: 'img/Tokyo_Revengers.jpg', description: 'Takemichi Hanagaki ist bereits am Tiefpunkt seines Lebens angelangt: Er wohnt in einer Drecksbude, arbeitet einen schlecht bezahlten Teilzeitjob, um sich über Wasser zu halten, und ist ein erbärmlicher Junggeselle. Doch es wird noch schlimmer, als er von dem Tod von Hinata Tachibana, seiner Freundin aus Mittelschulzeiten, erfährt, die von der berühmt-berüchtigten Tokyo Manji Gang getötet wurde, denn auch sein Leben schwebt in Gefahr! Bereits einen Tag nach der Ausstrahlung der schrecklichen Nachrichten wird er am Bahnsteig von einem Unbekannten auf die Gleise gestoßen … und erwacht zu seinem Erstaunen als Mittelschüler wieder. Nun, zwölf Jahre in der Vergangenheit, beschließt er gemeinsam mit Hinatas Bruder Naoto, die Zukunft zu verändern und so Hinata vor ihrem tragischen Tod zu retten. Sein Plan: die Tokyo Manji Gang infiltrieren, einen der Bosse befreunden und das Schicksal umschreiben!', price: '12.00', genres: ['Action', 'Drama'] },
        { id: 30, title: 'Sousou no Frieren', image: 'img/Frieren.jpg', description: 'Nach zehn langen, anstrengenden Jahren hat die Heldengruppe es geschafft: Der Dämonenkönig ist Geschichte! Die Gruppe, bestehend aus dem Helden Himmel, dem Zwergenkrieger Eisen, dem Pastor Heiter und der Elfenmagierin Frieren, kehrt nun als Helden nach Hause zurück. Da erscheint es bei ihrer ausgelassenen Feier zu einem Erä-Meteorschauer, der nur alle 50 Jahre wieder kommt. Angespornt von Frieren, die einen besseren Ort zum Schauen kennt, versprechen sich alle zum nächsten Meteorschauer nochmals zusammenzukommen.', price: '12.00', genres: ['Fantasy', 'Abenteuer'] },
        { id: 31, title: 'Gachiakuta', image: 'img/Gachiakuta.jpg', description: 'In einer Stadt, in der die Armen und Reichen durch hohe Mauern voneinander getrennt werden, gibt es nur einen Ort, an dem die Armen noch weniger leben wollen als in den Slums: den Abyss. Ein Ort, der den Bewohnern der Stadt nur als Müllhalde, sondern auch als Verbannungsort für Verbrecher dient. Der Waisenjunge Rudo versucht sich und seinen Ziehvater mit kriminellen Aktivitäten über Wasser zu halten, auch wenn letzterer ihn bittet, damit aufzuhören. Eines Tages kommt Rudo nach Hause und findet seinen Vater ermordet vor. Als wäre das nicht schon schlimm genug, wird ihm der Mord angehängt und er wird in den Abyss verbannt …', price: '12.00', genres: ['Action', 'Fantasy'] },
        { id: 32, title: 'Nagatoro-san', image: 'img/Nagatoro-san.jpg', description: 'Nagatoro, die den ersten Jahrgang der Oberschule besucht, sitzt eines Tages nach der Schule noch mit ihren Freundinnen in der Bibliothek zusammen, als ihnen durch ein Missgeschick eines Mitschülers des zweiten Jahrgangs dessen selbst gezeichneter Manga in die Hände fällt. Nachdem die Freundinnen sich über Stil und Aussage des Mangas ordentlich lustig gemacht haben, verbleibt später nur Nagatoro im Raum. Ihr war die Geschichte anscheinend nicht so egal wie dem Rest der Gruppe, und sie scheint auch etwas auf dem Herzen zu haben. Was sich daraufhin zwischen den beiden in der sonst menschenleeren Bibliothek abspielt, hätte sich ihr Senpai nicht im Geringsten träumen lassen.', price: '12.00', genres: ['Comedy', 'Romanze'] },
        { id: 33, title: 'Oshi no Ko', image: 'img/Oshi_no_Ko.jpg', description: 'Durch seine leider verstorbene Patientin Sarina wurde der Arzt Goro Amemiya ein Riesenfan des Idols Ai Hoshino. Er hätte sich jedoch niemals gedacht, dass er sie eines Tages live sehen würde. Und doch: Zusammen mit ihrem Manager steht sie nun vor ihm … schwanger?! Ai dachte, ein Arzt in einer ländlichen Gegend würde sie nicht kennen und reiste extra von Tokio an. Obwohl Goro ein Hardcorefan ist, vertraut sie ihm als Arzt die Geburt ihrer Zwillinge an. Tage, Wochen, Monate vergehen und die Geburt ihrer Kinder steht endlich an. Der Traum einer Familie ist zum Greifen nah! Allerdings geschieht ein großes Unglück: Goro wird von einem Stalker ermordet …', price: '12.00', genres: ['Action', 'Psychothriller'] },
        { id: 34, title: 'My Hero Academia', image: 'img/My_Hero_Academia.jpg', description: 'Menschen sind von Geburt an nicht alle gleich. Das hat der damals vierjährige Izuku Midoriya mitbekommen, als er von seinen Mitschülern, die alle Superkräfte besitzen, gemobbt wurde. Izuku gehört zu den wenigen Menschen, die ohne Superkräfte geboren wurden. Dieses Schicksal hat ihn jedoch nicht daran gehindert, seinen Traum zu verfolgen – den Traum, ein großer Superheld zu werden wie der legendäre Held All Might. Um ein Held zu werden, möchte er unbedingt einer Heldenschule beitreten – und zwar der angesehensten Heldenschule im gesamten Land. Mit der Hilfe seines Idols All Might versucht er nun, in der Schule angenommen und zu einem großartigen Superhelden zu werden.', price: '12.00', genres: ['Action', 'Superhelden'] },
        { id: 35, title: 'Konosuba!', image: 'img/Konosuba.jpg', description: 'Als der Schüler und Gamer Kazuma Satou eines Tages von seinem Einkauf zurückkehrt, erblickt er wie ein Mädchen beinahe von einem Traktor überfahren wird. Prompt versucht er sie zu retten, stirbt dabei jedoch selbst. Als er wieder erwacht, steht vor ihm ein Mädchen mit blauem Haar, das sich ihm als Göttin vorstellt. Sie gewährt ihm ein neues „Leben“ in einer Welt, die sich gänzlich von seiner altbekannten unterscheidet. Jedoch darf er nur eine Sache in diese Welt mit sich nehmen. Nach langem Überlegen entscheidet Kazuma sich dazu, die Göttin selbst zu wählen. Überrascht wird diese mit ihm zusammen in die neue Welt transportiert, in der sie sich gleich auf die Suche nach einer Unterkunft und nach etwas zu essen machen. Doch werden die beiden es schaffen, gemeinsam ihr neues Leben zu beschreiten …?', price: '12.00', genres: ['Fantasy', 'Comedy'] },
        // Weitere Produkte hinzufügen
    ];
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCartUI() {
        const cartContainer = document.getElementById('cart-container');
        cartContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Ihr Warenkorb ist leer.</p>';
        } else {
            const ul = document.createElement('ul');
            cart.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `${item.title} x ${item.quantity} - ${(item.price * item.quantity).toFixed(2)} €`;
                ul.appendChild(li);
                total += item.price * item.quantity;
            });
            cartContainer.appendChild(ul);
            const totalP = document.createElement('p');
            totalP.innerHTML = `Gesamt: ${total.toFixed(2)} €`;
            cartContainer.appendChild(totalP);
            const clearButton = document.createElement('button');
            clearButton.id = 'buttonWarenkorb';
            clearButton.innerText = 'Warenkorb leeren';
            clearButton.onclick = clearCart;
            cartContainer.appendChild(clearButton);
        }
    }

    function addToCart(product, quantity) {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.push({ ...product, quantity });
        }
        saveCart();
        updateCartUI();
    }

    function clearCart() {
        cart = [];
        saveCart();
        updateCartUI();
    }

    const trendProductsContainer = document.getElementById('trend-products');
    const bestProductsContainer = document.getElementById('best-products');
    const allProductsContainer = document.getElementById('all-products');
    const newProductsContainer = document.getElementById('new-products');

    if (trendProductsContainer) {
        trendProducts.forEach(product => {
            const productElement = createProductElement(product);
            trendProductsContainer.appendChild(productElement);
        });
    }

    if (bestProductsContainer) {
        bestProducts.forEach(product => {
            const productElement = createProductElement(product);
            bestProductsContainer.appendChild(productElement);
        });
    }

    if (allProductsContainer) {
        allProducts.forEach(product => {
            const productElement = createProductElement(product);
            allProductsContainer.appendChild(productElement);
        });
    }

    if (newProductsContainer) {
        newProducts.forEach(product => {
            const productElement = createProductElement(product);
            newProductsContainer.appendChild(productElement);
        });
    }


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
            const quantity = parseInt(this.quantity.value);
            addToCart(product, quantity);
            alert('Bestellung erfolgreich');
        });
    }

    window.filterByGenre = function() {
        const selectedGenre = document.getElementById('genre-select').value;
        const filteredProducts = selectedGenre === 'all' ? allProducts : allProducts.filter(product => product.genres.includes(selectedGenre));

        allProductsContainer.innerHTML = '';
        filteredProducts.forEach(product => {
            const productElement = createProductElement(product);
            allProductsContainer.appendChild(productElement);
        });
    };

    window.toggleCart = function() {
        const cartContainer = document.getElementById('cart-container');
        cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none';
        updateCartUI();
    };

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

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    const templateParams = {
        name: name,
        email: email,
        category: category,
        description: description,
        to_email: 'levin.wiederkehr@edu.tbz.ch'
    };

    emailjs.send('service_27oreke', 'template_l4wkljr', templateParams).then(function(response) {
        alert('E-Mail erfolgreich gesendet!', response.status, response.text);
        document.getElementById('contact-form').reset();
    }, function(error) {
        alert('Es gab einen Fehler beim Senden der E-Mail.', error);
    });
});

// Account Management
function toggleAccount() {
    const accountContainer = document.getElementById('account-container');
    accountContainer.style.display = accountContainer.style.display === 'none' ? 'block' : 'none';
}

function registerAccount() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('user', JSON.stringify({ username }));
        updateAccountUI();
        toggleAccount();
    } else {
        alert('Bitte füllen Sie beide Felder aus.');
    }
}

function logout() {
    localStorage.removeItem('user');
    updateAccountUI();
    location.reload();
}

function updateAccountUI() {
    const user = JSON.parse(localStorage.getItem('user'));
    const accountContainer = document.getElementById('account-container');
    const registerForm = document.getElementById('register-form');
    const logoutButton = document.getElementById('logout-button');

    if (user) {
        registerForm.style.display = 'none';
        logoutButton.style.display = 'block';
        accountContainer.innerHTML = `<p>Willkommen, ${user.username}</p>` + accountContainer.innerHTML;
    } else {
        registerForm.style.display = 'block';
        logoutButton.style.display = 'none';
        const userInfo = accountContainer.querySelector('p');
        if (userInfo) {
            userInfo.remove();
        }
    }
}