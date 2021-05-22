import Head from '../components/Head';
import Image from '../components/Image';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { FAQ as ROUTE } from '../data/routes';
import { Row, Col, Accordion, Card } from 'react-bootstrap';

const QA = [
    {
        question: 'Co tak naprawdę robi copywriter?',
        answer:
            'Pierwotni copywriterzy byli członkami zespołu projektowego, a ich rolą było pisanie tekstów wykorzystywanych w reklamach, materiałach prasowych czy innych formach promocji. Digitalizacja, postęp technologiczny oraz dynamiczny rozwój Internetu na nowo zdefiniował nasz zawód. Współczesny copywriter łączy w sobie wiele czynności: od przeprowadzania researchu (czyli wyszukiwania, gromadzenia i analizowania danych) przez tworzenie tekstu aż po finalną korektę. Zdarzało mi się słyszeć komentarze, że copywriter “stuka sobie w klawiaturę” lub “klepie teksty maszynowo” - to zaledwie ułamek faktycznej pracy, którą wykonuję.',
    },
    {
        question: 'Co to znaczy, że tekst jest zgodny z zasadami SEO?',
        answer: (
            <p>
                <a
                    href='https://pl.wikipedia.org/wiki/Optymalizacja_dla_wyszukiwarek_internetowych'
                    target='_blank'
                    className='text-dark'
                >
                    <strong>SEO</strong>
                </a>{' '}
                to specjalny proces optymalizacyjny, który ma za zadanie podnieść Twoją stronę w wynikach wyszukiwania.
                Jest to o tyle ważne, że w ten sposób możesz wyprzedzić swoją konkurencję i być łatwiej, szybciej i
                skuteczniej dostrzegalny. Jak każde działanie w internecie, tak i to rządzi się pewnymi regułami,
                których należy przestrzegać. Zbyt duże nacechowanie tekstu słowami kluczowymi, niedopasowane frazy czy
                brak jakichkolwiek wyrażeń będzie skutkować nieskutecznym SEO. Analogicznie - nienaturalnie brzmiące
                frazy lub zbyt częste występowanie tychże słów sprawi, że czytelnik zwyczajnie w świecie zmęczy się
                tekstem i opuści stronę. Tworząc każdy tekst, dbam o zachowanie optimum SEO i rozsądne wplatanie
                wyrażeń, dzięki czemu artykuł będzie przyjazny dla czytelnika i wartościowy dla algorytmów.
            </p>
        ),
    },
    {
        question: 'W jakim programie sporządzasz tekst?',
        answer: (
            <p>
                Najczęściej tworzę teksty w Wordzie 2016, jednak w wyjątkowych przypadkach pracuję na szyfrowanym
                dokumencie Google. Jeśli Twój system operacyjny nie obsługuje pakietu Microsoft Office, zapiszę dla
                Ciebie tekst w PDF lub stworzę go w docs Google. Jeśli powyższe rozwiązania nie są dla Ciebie
                odpowiednie, wydrukuję gotowy tekst zgodnie ze{' '}
                <a href='https://pl.wikipedia.org/wiki/Znormalizowany_maszynopis' target='_blank' className='text-dark'>
                    <strong>standardami maszynopisu</strong>
                </a>{' '}
                i wyślę na wskazany przez Ciebie adres.
            </p>
        ),
    },
    {
        question: 'Jak wygląda współpraca z Tobą?',
        answer: (
            <>
                <p>Ogólny schemat współpracy wygląda następująco:</p>
                <ol>
                    <li>
                        Kontaktujesz się ze mną telefonicznie lub mailowo i wykonujemy wywiad potrzeb. Zgłaszasz swoje
                        oczekiwania i życzenia, a ja uzupełniam je o swoje pytania i doprecyzowania.
                    </li>
                    <li>
                        Na podstawie pozyskanych informacji tworzę dla Ciebie ofertę, która szczegółowo omawia wykonanie
                        zlecenia, określa stawkę oraz termin wykonania usługi. Przy większych zamówieniach lub
                        długofalowej współpracy przedstawiam również umowę współpracy B2B in blanco, którą w następnym
                        kroku podpisujemy.
                    </li>
                    <li>
                        Po załatwieniu formalności przystępuję do realizacji zlecenia - w razie pytań cały czas
                        pozostaję do dyspozycji pod mailem lub telefonem.
                    </li>
                    <li>
                        Gotowy tekst wysyłam na skrzynkę mailową do akceptacji: jeśli wszystko jest zgodne z
                        oczekiwaniami, przechodzimy do rozliczenia, jeżeli pewne elementy Ci nie odpowiadają lub chcesz
                        poprawić, nanoszę bezpłatną korektę zgodną z Twoimi wytycznymi.
                    </li>
                    <li>
                        Wystawiam fakturę na wskazane dane, która płatna jest w ciągu 5 dni roboczych. Po opłaceniu
                        faktury przekazuję Ci stosowne prawa autorskie, które są niezbędne do publikacji tekstu.
                    </li>
                </ol>
            </>
        ),
    },
    {
        question: 'Czym się różni artykuł od wpisu blogowego lub innego tekstu?',
        answer:
            'Każdy tekst ma swoje indywidualne cechy i określoną charakterystykę - jedne mają za zadanie przekazywać kluczowe informacje, inne wywołać określone emocje u odbiorcy, a jeszcze inne zachęcić do pewnej interakcji. Na podstawie finalnego przeznaczenia treści, ustalamy pewną formę realizacji zlecenia: określamy długość tekstu, decydujemy o jego cechach perswazyjnych, konsultujemy formę i język, którego użyjemy. Różnice więc polegają na tym, gdzie ostatecznie stworzony tekst wyląduje i jak on będzie wyglądać; być może będzie to tekst wyświetlany na Twojej stronie www, wpis na bloga firmowego, krótki opis produktu w sklepie internetowym lub reklama radiowa. ',
    },
    {
        question: 'Co oznacza skrót zzs i zbs?',
        answer:
            'ZZS to akronim słów “znaki ze spacjami” - jest to podstawowy miernik długości tekstu wynikowego i przelicznik służący do rozliczenia należności. Liczone jest każde stuknięcie w klawiaturę, w tym także tworzenie spacji czy enterów. Skrót ZBS z kolei oznacza “znaki bez spacji” - stosunkowo rzadko używana jednostka, która rozlicza copywritera wyłącznie za napisane litery, bez uwzględnienia znaku “spacja i “enter”. Stawki za moje usługi podaję za każdy rozpoczęty tysiąc znaków ze spacjami, a 1000 zzs to około 35-40% kartki A4. Poniższa odpowiedź na pytanie liczy sobie dokładnie 605 znaków ze spacjami.',
    },
    {
        question: 'Czy rozliczasz swój tekst na podstawie napisanych słów?',
        answer:
            'Nie. Jest to w mojej opinii nieefektywne rozliczenie stworzonego tekstu, gdyż proste teksty z dużą ilością spójników i krótkich wyrazów byłyby “bardziej cenne” od dłuższych wypowiedzi i wyszukanych słów. Najpopularniejszą i najbardziej sprawiedliwą metodą rozliczania stworzonej treści jest przelicznik znaków ze spacjami.',
    },
    {
        question: 'Czy obsługujesz także osoby fizyczne?',
        answer:
            'Oczywiście; Twoja osobowość prawna (lub jej brak) nie ma dla mnie znaczenia - współpracuję zarówno z firmami, jak i klientami indywidualnymi.',
    },
    {
        question: 'Czy napiszesz za mnie pracę dyplomową?',
        answer: (
            <p>
                Nie. Tworzenie prac służących do uzyskania tytułu naukowego jest w Polsce nielegalne i podlega sankcjom
                z tytułu{' '}
                <a
                    href='https://arslege.pl/naruszanie-cudzych-praw-autorskich/k442/a36890/'
                    target='_blank'
                    className='text-dark'
                >
                    <strong>art. 115 pr. aut.</strong>
                </a>{' '}
                oraz{' '}
                <a
                    href='https://arslege.pl/podstepne-wyludzenie-poswiadczenia-nieprawdy-w-dokumencie/k1/a312/'
                    target='_blank'
                    className='text-dark'
                >
                    <strong>art. 272 kk.</strong>
                </a>{' '}
                Jeśli jednak masz problem z napisaniem takiego tekstu lub nie wiesz, jak taka praca powinna wyglądać,
                skorzystaj z pakietu konsultacji content marketing. Chętnie też sprawdzę Twoją pracę pod względem
                stylistycznym, gramatycznym oraz ortograficznym w ramach usługi korekty tekstów naukowych.
            </p>
        ),
    },
    {
        question: 'Poszukuję copywritera na dłużej - czy mogę Cię zatrudnić na etat?',
        answer: (
            <p>
                Jeśli planujesz długoterminową współpracę lub rozpoczynasz projekt, który wymaga zaangażowania
                copywritera do zespołu, proponuję współpracę na{' '}
                <a
                    href='https://www.bankier.pl/smart/wspolpraca-b2b-o-czym-musisz-pamietac-podpisujac-umowe-b2b'
                    target='_blank'
                    className='text-dark'
                >
                    <strong>umowie B2B</strong>
                </a>{' '}
                . Po określeniu Twoich potrzeb i zrewidowaniu moich mocy przerobowych przedstawiam Ci dokument w wersji
                in blanco, który finalnie podpiszemy, by stanowił podstawę naszego współdziałania.
            </p>
        ),
    },
    {
        question: 'Czym jest usługa OVERNIGHT?',
        answer:
            'Usługa OVERNIGHT to opcja skierowana do osób, które potrzebują tekstu na następny dzień. Wykupując pakiet OVERNIGHT masz pewność, że tekst zostanie dostarczony w ciągu 30 godzin od ustalenia warunków współpracy. Usługa ta jest dostępna dla tekstów do 10.000 zzs.',
    },
    {
        question: 'Czym jest usługa EXPRESS?',
        answer:
            'Ta usługa skierowana jest do osób, które natychmiast potrzebują tekstu, a każda minuta jest na wagę złota. Zakup pakietu EXPRESS to gwarancja zrealizowania tekstu w ciągu 6 godzin od ustalenia warunków współpracy. Usługa ta jest dostępna dla tekstów do 6.000 zzs.',
    },
    {
        question: 'Do tekstów potrzebuję grafik i obrazków - czy jesteś w stanie mi pomóc?',
        answer:
            'Rozumiem, że szata graficzna może być w wielu przypadkach niezwykle istotnym aspektem i ubogaceniem tekstu. Ze swojej strony mogę zaproponować dodatki w postaci zdjęć stockowych z publicznych baz danych, takich jak Pexels czy Pixabay. Jeśli jednak oczekujesz naprawdę ciekawej i jakościowej grafiki, koniecznie sprawdź portfolio mojego dobrego znajomego. Jeśli Ci się spodoba, skontaktuj się ze mną - z pewnością otrzymasz preferencyjne warunki współpracy z grafikiem.',
    },
    {
        question: 'Nie widzę cen na Twojej stronie - gdzie znajdę cennik?',
        answer: (
            <>
                <p>
                    Stały cennik nie ma sensu w przypadku copywritingu, ponieważ każde zlecenie ma swój indywidualny
                    stopień trudności i realizuje odmienne założenia. Inna stawka będzie wyliczona za wykonanie 100
                    opisów produktów do e-sklepu z elektronarzędziami, inna za wpis na bloga o naturalnych kosmetykach,
                    a inna za przygotowanie raportu eksploatacyjnego maszyny tokarskiej. Na ostateczną cenę mają wpływ
                    takie zmienne, jak:
                </p>
                <ul>
                    <li>Ilość zamawianej treści;</li>
                    <li>Długość tekstu wynikowego;</li>
                    <li>Stopień skomplikowania zagadnienia;</li>
                    <li>Termin, w którym ma się odbyć realizacja;</li>
                    <li>Dodatkowe wymogi, które zmniejszają lub zwiększają stopień trudności pracy;</li>
                </ul>
            </>
        ),
    },
    {
        question: 'Mam uwagi co do tekstu, który dla mnie napisałeś. Co mam zrobić?',
        answer:
            'Jeśli pojawiły się jakiekolwiek zastrzeżenia, skontaktuj się ze mną mailowo lub telefonicznie; im szybciej zgłosisz uwagi, tym szybciej naniosę poprawki. Pamiętaj, że po wykonaniu tekstu przysługuje Ci tzw. okres acceptu, czyli wcześniej wyznaczony przedział czasowy, w którym możesz zgłaszać prośby o zmiany.',
    },
    {
        question: 'Tekst, który dla mnie napisałeś, nie jest już dostępny. Gdzie dostanę kopię swojego tekstu?',
        answer:
            'Jeżeli utraciłeś kopię swojego tekstu lub nie możesz otworzyć pliku, nie musisz się martwić. Wszystkie realizacje skrupulatnie zapisuję, dzięki czemu nawet po kilkunastu miesiącach będziesz mógł odzyskać tekst, który dla Ciebie napisałem. Wystarczy, że skontaktujesz się ze mną i opiszesz treść, którą potrzebujesz, a ja najszybciej, jak się tylko da, znajdę plik i prześlę go ponownie na Twój adres e-mail.',
    },
    {
        question:
            'Napisałeś tekst, który miał być zgodny z zasadami SEO i po tygodniu dalej nie widzę rezultatów pozycjonowania. Co jest nie tak?',
        answer:
            'Proces pozycjonowania to wieloetapowe i żmudne zadanie, a tekst jest wyłącznie jednym z elementów optymalizujących SEO. To trochę tak, jak z posadzeniem drzewa - nie możesz oczekiwać rozłożystej korony czy dojrzałych owoców po kilku dniach od wkopania sadzonki do ziemi. Musisz także pamiętać, że strona “musi pracować” w ramach SEO, czyli regularnie otrzymywać treści z powiązanymi słowami kluczowymi. Innymi słowy, uzbrój się w cierpliwość, bo pozycjonowanie może trwać miesiącami.',
    },
];

const FAQ = () => (
    <>
        <Head />
        <Navigation currentPath={ROUTE.path} />
        <main className='container min-vh-80'>
            <Image src={`/img${ROUTE.path}.jpg`} externalClassName='fullscreenBackground' />
            <Row className='px-3 justify-content-center'>
                <h1 className='text-uppercase fancyLetterSpacing'>
                    <strong>{ROUTE.name}</strong>
                </h1>
            </Row>
            <Row className='my-5'>
                <Col>
                    <p className='text-justify'>
                        Jesteś tu, bo najprawdopodobniej masz pytanie, pojawiły się wątpliwości lub po prostu
                        zastanawiasz się nad pewnymi aspektami współpracy. Poniżej zamieszczam odpowiedzi na najczęściej
                        zadawane pytania w kwestii copywritingu, tworzonych przeze mnie tekstów i innych tematów
                        pokrewnych. Jeśli nie znajdziesz odpowiedzi na swoje pytanie, napisz do mnie maila lub zadzwoń -
                        jestem do Twojej dyspozycji.
                    </p>
                </Col>
            </Row>

            <Row className='my-5'>
                <Col>
                    <Accordion defaultActiveKey='0'>
                        {QA.map(({ question, answer }) => (
                            <Card style={{ cursor: 'pointer' }} className='bg-white-70' key={question}>
                                <Accordion.Toggle as={Card.Header} eventKey={question} className='text-dark'>
                                    <h3>
                                        <strong>{question}</strong>
                                    </h3>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={question}>
                                    <Card.Body>{typeof answer === 'string' ? <p>{answer}</p> : answer}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        ))}
                    </Accordion>
                </Col>
            </Row>
        </main>
        <Footer externalClassName='text-dark' />
    </>
);

export default FAQ;
