// Application data
const subjectsData = {
  "polish_basic": {
    "name": "Język Polski - Poziom Podstawowy",
    "topics": [
      "Lektury epickie obowiązkowe",
      "Lektury dramatyczne obowiązkowe", 
      "Biblia - znajomość wybranych tekstów",
      "Antyk - Iliada, Antygona",
      "Literatura renesansu i baroku",
      "Literatura oświecenia",
      "Literatura romantyzmu - Dziady cz. III",
      "Literatura pozytywizmu - Lalka",
      "Literatura Młodej Polski - Wesele",
      "Literatura dwudziestolecia międzywojennego",
      "Literatura współczesna - Rok 1984",
      "Gramatyka i ortografia",
      "Stylistyka i środki językowe",
      "Retoryka i argumentacja",
      "Interpretacja tekstów literackich",
      "Rozumienie tekstów nieliterackich", 
      "Wypracowanie argumentacyjne (min. 300 słów)",
      "Egzamin ustny - interpretacja tekstów"
    ],
    "materials": [
      {"name": "CKE Informator Polski", "url": "https://arkusze.pl/informatory/informator-maturalny-jezyk-polski-2025-poziom-podstawowy.pdf"},
      {"name": "Lektury online", "url": "https://wolnelektury.pl"},
      {"name": "Zadania polski", "url": "https://zadania.dlamaturzysty.info"}
    ],
    "exams": [
      {"name": "Arkusze CKE Polski", "url": "https://arkusze.pl/polski-matura-poziom-podstawowy/"},
      {"name": "Próbne matury", "url": "https://www.otouczelnie.pl/artykul/32810/Matura-z-jezyka-polskiego-2025-poziom-podstawowy"}
    ]
  },
  "math_basic": {
    "name": "Matematyka - Poziom Podstawowy", 
    "topics": [
      "Liczby rzeczywiste i działania",
      "Potęgowanie i pierwiastkowanie",
      "Logarytmy",
      "Wyrażenia algebraiczne",
      "Równania liniowe i kwadratowe",
      "Nierówności",
      "Układy równań",
      "Procent składany",
      "Funkcje liniowe i kwadratowe",
      "Wykresy funkcji",
      "Ciągi arytmetyczne",
      "Ciągi geometryczne",
      "Trygonometria podstawowa",
      "Geometria płaska - pola i obwody",
      "Geometria przestrzenna - objętości",
      "Kombinatoryka podstawowa",
      "Rachunek prawdopodobieństwa",
      "Statystyka opisowa"
    ],
    "materials": [
      {"name": "CKE Informator Matematyka", "url": "https://arkusze.pl/informatory/informator-maturalny-matematyka-2025-poziom-podstawowy.pdf"},
      {"name": "Zadania.info matematyka", "url": "https://zadania.info"},
      {"name": "Matemaks - teoria", "url": "https://www.matemaks.pl"}
    ],
    "exams": [
      {"name": "Arkusze matematyka podstawowa", "url": "https://arkusze.pl/matematyka-matura-poziom-podstawowy/"},
      {"name": "Próbne CKE matematyka", "url": "https://www.otouczelnie.pl/artykul/28721/Arkusze-maturalne-matematyka"}
    ]
  },
  "english_basic": {
    "name": "Język Angielski - Poziom Podstawowy",
    "topics": [
      "Rozumienie ze słuchu - dialogi",
      "Rozumienie ze słuchu - monologi", 
      "Rozumienie tekstów - krótkie",
      "Rozumienie tekstów - długie",
      "Znajomość gramatyki",
      "Znajomość słownictwa",
      "Funkcje językowe",
      "Wypowiedź pisemna - e-mail",
      "Wypowiedź pisemna - wpis na blogu",
      "Rozmowa egzaminacyjna",
      "Opis ilustracji",
      "Odgrywanie ról",
      "Wymowa i intonacja",
      "Płynność wypowiedzi"
    ],
    "materials": [
      {"name": "CKE Informator Angielski", "url": "https://arkusze.pl/informatory/informator-maturalny-jezyk-angielski-2025.pdf"},
      {"name": "Cambridge English", "url": "https://www.cambridgeenglish.org"},
      {"name": "Angielski dla maturzysty", "url": "https://angielskidlamaturzysty.pl"}
    ],
    "exams": [
      {"name": "Arkusze angielski podstawowy", "url": "https://arkusze.pl/angielski-matura-poziom-podstawowy/"},
      {"name": "Próbne CKE angielski", "url": "https://www.otouczelnie.pl/artykul/28722/Arkusze-maturalne-angielski"}
    ]
  },
  "math_extended": {
    "name": "Matematyka - Poziom Rozszerzony",
    "topics": [
      "Liczby rzeczywiste - własności",
      "Funkcje - badanie przebiegu", 
      "Granice funkcji",
      "Pochodne funkcji",
      "Zastosowania pochodnych",
      "Optymalizacja", 
      "Trygonometria - funkcje cyklometryczne",
      "Równania trygonometryczne",
      "Geometria analityczna - prosta",
      "Geometria analityczna - okrąg",
      "Geometria analityczna - stożkowe",
      "Geometria przestrzenna - wektory",
      "Planimetria - dowody",
      "Stereometria - objętości złożone",
      "Kombinatoryka zaawansowana", 
      "Prawdopodobieństwo warunkowe",
      "Ciągi - granice",
      "Indukcja matematyczna",
      "Dowodzenie twierdzeń"
    ],
    "materials": [
      {"name": "CKE Informator Matematyka Rozszerzona", "url": "https://arkusze.pl/informatory/informator-maturalny-matematyka-2025-poziom-rozszerzony.pdf"},
      {"name": "Zadania.info rozszerzona", "url": "https://zadania.info"},
      {"name": "Matemaks rozszerzona", "url": "https://www.matemaks.pl"}
    ],
    "exams": [
      {"name": "Arkusze matematyka rozszerzona", "url": "https://arkusze.pl/matematyka-matura-poziom-rozszerzony/"},
      {"name": "Próbne CKE matematyka rozszerzona", "url": "https://wiecejnizmatura.pl/blog/matura-rozszerzona-z-matematyki"}
    ]
  },
  "physics_extended": {
    "name": "Fizyka - Poziom Rozszerzony",
    "topics": [
      "Kinematyka punktu materialnego",
      "Dynamika punktu materialnego",
      "Zasady dynamiki Newtona",
      "Energia i praca", 
      "Pęd i zderzenia",
      "Moment pędu i moment siły",
      "Ruch obrotowy bryły sztywnej",
      "Pole grawitacyjne",
      "Astronomia i kosmologia",
      "Drgania harmoniczne", 
      "Fale mechaniczne",
      "Fale dźwiękowe",
      "Optyka geometryczna",
      "Optyka falowa",
      "Pole elektryczne",
      "Prąd elektryczny",
      "Pole magnetyczne",
      "Indukcja elektromagnetyczna",
      "Termodynamika - gazy",
      "Przemiany termodynamiczne",
      "Fizyka atomowa",
      "Fizyka jądrowa", 
      "Promieniotwórczość"
    ],
    "materials": [
      {"name": "CKE Informator Fizyka", "url": "https://arkusze.pl/informatory/informator-maturalny-fizyka-2025.pdf"},
      {"name": "Fizyka dla maturzysty", "url": "https://fizyka.dlamaturzysty.info"},
      {"name": "Olimpiada Fizyczna", "url": "https://olimpiadafizyczna.pl"}
    ],
    "exams": [
      {"name": "Arkusze fizyka rozszerzona", "url": "https://arkusze.pl/fizyka-matura-poziom-rozszerzony/"},
      {"name": "Próbne CKE fizyka", "url": "https://www.otouczelnie.pl/artykul/32838/Matura-2025-fizyka-poziom-rozszerzony"}
    ]
  },
  "computer_science_extended": {
    "name": "Informatyka - Poziom Rozszerzony", 
    "topics": [
      "Algorytmy sortowania",
      "Algorytmy wyszukiwania",
      "Struktury danych - tablice",
      "Struktury danych - listy", 
      "Struktury danych - stosy i kolejki",
      "Programowanie dynamiczne",
      "Algorytmy grafowe",
      "Rekurencja", 
      "Złożoność algorytmów",
      "Przetwarzanie tekstu",
      "Kodowanie informacji",
      "Systemy liczbowe",
      "Grafika komputerowa - podstawy",
      "Grafika rastrowa i wektorowa",
      "Modelowanie 3D",
      "Sieci komputerowe - protokoły",
      "Internet i WWW", 
      "Cyberbezpieczeństwo",
      "Kryptografia",
      "Prawo autorskie i licencje",
      "Bazy danych - podstawy SQL"
    ],
    "materials": [
      {"name": "CKE Informator Informatyka", "url": "https://arkusze.pl/informatory/informator-maturalny-informatyka-2025.pdf"},
      {"name": "Kurs informatyka matura", "url": "https://kursmaturainformatyka.pl"},
      {"name": "Algorytmy i struktury", "url": "https://eduinf.waw.pl"}
    ],
    "exams": [
      {"name": "Arkusze informatyka rozszerzona", "url": "https://arkusze.pl/informatyka-matura-poziom-rozszerzony/"},
      {"name": "Próbne CKE informatyka", "url": "https://www.otouczelnie.pl/artykul/33361/Matura-2025-informatyka-poziom-rozszerzony"}
    ]
  },
  "chemistry_extended": {
    "name": "Chemia - Poziom Rozszerzony",
    "topics": [
      "Atomy, cząsteczki i stechiometria chemiczna",
      "Budowa atomu i konfiguracje elektronowe", 
      "Liczby kwantowe i orbitale atomowe",
      "Układ okresowy pierwiastków",
      "Wiązania chemiczne - jonowe, kowalencyjne",
      "Teoria VSEPR i kształty cząsteczek",
      "Oddziaływania międzycząsteczkowe",
      "Kinetyka chemiczna - szybkość reakcji",
      "Równowaga chemiczna - zasada Le Chateliera",
      "Termodynamika chemiczna - entalpia, entropia",
      "Roztwory - stężenia, właściwości", 
      "Kwasy i zasady - teorie, pH",
      "Hydroliza soli i bufory",
      "Reakcje redoks - stopnie utlenienia",
      "Elektrochemia - ogniwa, elektroliza",
      "Metale i niemetale - właściwości",
      "Związki nieorganiczne - synteza",
      "Węglowodory - alkany, alkeny, alkiny",
      "Pochodne węglowodorów - alkohole, fenole", 
      "Aldehydy, ketony i kwasy karboksylowe",
      "Związki organiczne z azotem",
      "Wielofunkcyjne pochodne organiczne",
      "Chemia analityczna - metody oznaczania",
      "Chemia praktyczna - laboratorium"
    ],
    "materials": [
      {"name": "CKE Informator Chemia", "url": "https://arkusze.pl/informatory/informator-maturalny-chemia-2025.pdf"},
      {"name": "Chemia dla maturzysty", "url": "https://wiecejnizmatura.pl/blog/matura-z-chemii"},
      {"name": "Podstawa programowa chemia", "url": "https://biologhelp.pl/sites/default/files/materialy_maturalne/podstawa_programowa_chemia_2025_-_biologhelp.pdf"}
    ],
    "exams": [
      {"name": "Arkusze chemia rozszerzona", "url": "https://arkusze.pl/matura-chemia-2025-maj-poziom-rozszerzony/"},
      {"name": "Próbne CKE chemia", "url": "https://www.otouczelnie.pl/artykul/32837/Matura-2025-chemia-poziom-rozszerzony"}
    ]
  },
  "biology_extended": {
    "name": "Biologia - Poziom Rozszerzony",
    "topics": [
      "Chemizm życia - makro i mikroelementy",
      "Węglowodany, lipidy, białka, kwasy nukleinowe",
      "Budowa komórki prokariotycznej",
      "Budowa komórki eukariotycznej",
      "Błony biologiczne i transport przez błony",
      "Organizmy jednokomórkowe i wielokomórkowe",
      "Enzymy - budowa, działanie, regulacja",
      "Metabolizm - anabolizm i katabolizm",
      "Fotosynteza - faza świetlna i ciemna",
      "Oddychanie komórkowe - glikoliza, cykl Krebsa",
      "Cykl komórkowy i jego regulacja",
      "Mitoza i mejoza - przebieg i znaczenie",
      "Wirusy - budowa, cykl rozwojowy",
      "Bakterie - morfologia, fizjologia",
      "Protisty - różnorodność i znaczenie", 
      "Grzyby - budowa, rozmnażanie, ekologia",
      "Rośliny - anatomia i fizjologia",
      "Zwierzęta - systemy narządowe",
      "Anatomia i fizjologia człowieka",
      "Układ krążenia, oddechowy, pokarmowy",
      "Układ nerwowy i układ hormonalny",
      "Genetyka klasyczna - prawa Mendla",
      "Genetyka molekularna - DNA, RNA, białka", 
      "Mutacje i ich konsekwencje",
      "Mechanizmy ewolucji - dobór naturalny",
      "Specjacja i systematyka organizmów",
      "Ekologia - ekosystemy i ich funkcjonowanie",
      "Przepływ energii w ekosystemach",
      "Krążenie materii w przyrodzie",
      "Ochrona przyrody i bioróżnorodność"
    ],
    "materials": [
      {"name": "CKE Informator Biologia", "url": "https://arkusze.pl/informatory/informator-maturalny-biologia-2025.pdf"},
      {"name": "Biologia dla maturzysty", "url": "https://wiecejnizmatura.pl/blog/matura-z-biologii"},
      {"name": "Podstawa programowa biologia", "url": "https://biologhelp.pl/sites/default/files/materialy_maturalne/podstawa_programowa_biologia_2025_-_biologhelp.pdf"}
    ],
    "exams": [
      {"name": "Arkusze biologia rozszerzona", "url": "https://arkusze.pl/matura-biologia-2025-maj-poziom-rozszerzony/"},
      {"name": "Próbne CKE biologia", "url": "https://powtorkazbiologii.pl/matura-z-biologii-2025-wymagania-egzaminacyjne-formula2023/"}
    ]
  }
};

const motivationalMessages = [
  "🎉 Wspaniale! Opanowałeś kolejny temat!",
  "🚀 Świetna robota! Jesteś coraz bliżej celu!",
  "⭐ Brawo! Twój postęp jest imponujący!",
  "🎯 Fantastycznie! Kolejny krok do sukcesu na maturze!",
  "💪 Super! Widać, że ciężko pracujesz!",
  "🏆 Doskonale! Jesteś na dobrej drodze!",
  "🌟 Brawo! Każdy ukończony temat to krok bliżej matury!",
  "🎊 Świetnie! Systematyczna nauka przynosi efekty!",
  "🔥 Niesamowite! Twoja determinacja jest inspirująca!",
  "🎈 Brawo! Jesteś coraz lepiej przygotowany do matury!"
];

// Application state
let progressData = {};
let currentSubject = null;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeProgress();
  setupEventListeners();
  updateOverallProgress();
  updateSubjectCards();
});

// Initialize progress data
function initializeProgress() {
  Object.keys(subjectsData).forEach(subjectKey => {
    progressData[subjectKey] = {};
    subjectsData[subjectKey].topics.forEach((topic, index) => {
      progressData[subjectKey][index] = false;
    });
  });
}

// Set up event listeners
function setupEventListeners() {
  // Subject cards click
  document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', function() {
      const subject = this.dataset.subject;
      openSubjectModal(subject);
    });
  });

  // Modal close
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', closeModal);

  // Escape key to close modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// Open subject modal
function openSubjectModal(subjectKey) {
  currentSubject = subjectKey;
  const subject = subjectsData[subjectKey];
  
  // Update modal title
  document.getElementById('modal-title').textContent = subject.name;
  
  // Update progress stats
  updateModalProgress();
  
  // Populate topics
  populateTopics(subject.topics);
  
  // Populate materials
  populateMaterials(subject.materials);
  
  // Populate exams
  populateExams(subject.exams);
  
  // Show modal
  document.getElementById('subject-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  document.getElementById('subject-modal').classList.add('hidden');
  document.body.style.overflow = 'auto';
  currentSubject = null;
}

// Update modal progress
function updateModalProgress() {
  if (!currentSubject) return;
  
  const subject = subjectsData[currentSubject];
  const completed = Object.values(progressData[currentSubject]).filter(Boolean).length;
  const total = subject.topics.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  document.getElementById('modal-completed').textContent = completed;
  document.getElementById('modal-total').textContent = total;
  document.getElementById('modal-percentage').textContent = percentage + '%';
  
  const progressBar = document.getElementById('modal-progress-bar').querySelector('.progress-fill');
  progressBar.style.width = percentage + '%';
}

// Populate topics list
function populateTopics(topics) {
  const container = document.getElementById('topics-list');
  container.innerHTML = '';
  
  topics.forEach((topic, index) => {
    const isCompleted = progressData[currentSubject][index];
    
    const topicItem = document.createElement('div');
    topicItem.className = `topic-item ${isCompleted ? 'completed' : ''}`;
    
    topicItem.innerHTML = `
      <input type="checkbox" class="topic-checkbox" id="topic-${index}" ${isCompleted ? 'checked' : ''}>
      <label for="topic-${index}" class="topic-label">${topic}</label>
    `;
    
    const checkbox = topicItem.querySelector('.topic-checkbox');
    checkbox.addEventListener('change', function() {
      toggleTopic(index, this.checked);
    });
    
    container.appendChild(topicItem);
  });
}

// Populate materials list
function populateMaterials(materials) {
  const container = document.getElementById('materials-list');
  container.innerHTML = '';
  
  materials.forEach(material => {
    const link = document.createElement('a');
    link.href = material.url;
    link.target = '_blank';
    link.className = 'material-item';
    link.textContent = material.name;
    container.appendChild(link);
  });
}

// Populate exams list
function populateExams(exams) {
  const container = document.getElementById('exams-list');
  container.innerHTML = '';
  
  exams.forEach(exam => {
    const link = document.createElement('a');
    link.href = exam.url;
    link.target = '_blank';
    link.className = 'exam-item';
    link.textContent = exam.name;
    container.appendChild(link);
  });
}

// Toggle topic completion
function toggleTopic(topicIndex, isCompleted) {
  if (!currentSubject) return;
  
  const wasCompleted = progressData[currentSubject][topicIndex];
  progressData[currentSubject][topicIndex] = isCompleted;
  
  // Update topic item appearance
  const topicItem = document.querySelector(`#topic-${topicIndex}`).closest('.topic-item');
  if (isCompleted) {
    topicItem.classList.add('completed');
  } else {
    topicItem.classList.remove('completed');
  }
  
  // Update progress displays
  updateModalProgress();
  updateOverallProgress();
  updateSubjectCards();
  
  // Show motivation if newly completed
  if (isCompleted && !wasCompleted) {
    showMotivation();
  }
}

// Update overall progress
function updateOverallProgress() {
  let totalCompleted = 0;
  let totalTopics = 0;
  
  Object.keys(subjectsData).forEach(subjectKey => {
    const completed = Object.values(progressData[subjectKey]).filter(Boolean).length;
    const total = subjectsData[subjectKey].topics.length;
    
    totalCompleted += completed;
    totalTopics += total;
  });
  
  const percentage = totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0;
  
  document.getElementById('completed-topics').textContent = `${totalCompleted} / ${totalTopics}`;
  document.getElementById('overall-percentage').textContent = percentage + '%';
  
  const progressBar = document.getElementById('overall-progress-bar').querySelector('.progress-fill');
  progressBar.style.width = percentage + '%';
}

// Update subject cards progress
function updateSubjectCards() {
  Object.keys(subjectsData).forEach(subjectKey => {
    const card = document.querySelector(`[data-subject="${subjectKey}"]`);
    if (!card) return;
    
    const completed = Object.values(progressData[subjectKey]).filter(Boolean).length;
    const total = subjectsData[subjectKey].topics.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    const progressBar = card.querySelector('.progress-fill');
    const progressText = card.querySelector('.progress-text');
    
    progressBar.style.width = percentage + '%';
    progressText.textContent = percentage + '%';
  });
}

// Show motivational message
function showMotivation() {
  const message = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
  
  document.getElementById('motivation-text').textContent = message;
  document.getElementById('motivation-overlay').classList.remove('hidden');
  
  // Show confetti
  showConfetti();
  
  // Hide after 3 seconds
  setTimeout(() => {
    document.getElementById('motivation-overlay').classList.add('hidden');
    hideConfetti();
  }, 3000);
}

// Confetti animation
function showConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  canvas.classList.remove('hidden');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F', '#D2BA4C'];
  
  // Create particles
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: -10,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 4 + 2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.rotation += particle.rotationSpeed;
      particle.vy += 0.1; // gravity
      
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      ctx.fillStyle = particle.color;
      ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size);
      ctx.restore();
      
      // Remove particles that are off screen
      if (particle.y > canvas.height + 10) {
        particles.splice(index, 1);
      }
    });
    
    if (particles.length > 0 && !canvas.classList.contains('hidden')) {
      requestAnimationFrame(animate);
    }
  }
  
  animate();
}

function hideConfetti() {
  document.getElementById('confetti-canvas').classList.add('hidden');
}

// Handle window resize for confetti
window.addEventListener('resize', function() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas.classList.contains('hidden')) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});