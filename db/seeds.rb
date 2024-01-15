# frozen_string_literal: true

require 'faker'

EventUser.destroy_all
User.destroy_all

first = true
10.times do
  next unless first

  10.times do
    user = User.new(
      name: Faker::Name.name,
      email: Faker::Internet.email,
      sell_site_token: SecureRandom.alphanumeric
    )
    user.save!
  end
end

Event.destroy_all

events_data = [
  {
    name: ['Liverpool Forró Festival 2024', 'Festiva de Forró de Liverpool 2024'],
    description: ['Forró classes in the heart of Liverpool. Find us upstairs above the Caledonia.
    Check out our Instagram page for the latest events and news, like class cancellations or delays.
    No pre-purchase or registration necessary. Just show up and we will see you there!',
                  'Aulas de Forró no coração de Liverpool. Estamos esperando por você no andar de cima do Caledonia.
    Fique de olho na nossa página do Instagram para os últimos eventos e notícias,
    como cancelamentos ou atrasos de aulas.
    Não é necessário pré-compra ou registro. É só aparecer e nos vemos lá!'],
    start_datetime: DateTime.now + 2.day,
    end_datetime: DateTime.now + 2.day + 3.hours,
    price: 20.0,
    cover_image: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/festival.jpg',
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/festival.jpg'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    type_event: 'Special Events',
    location: ['The Caledonia', 'Unit 17, Albert Dock, Liverpool L3 4AF', 'https://maps.app.goo.gl/UqS38KGdwpfPwagt5'],
    date: ['10-12 MAY', '10-12 MAIO'],
    time: ['7pm Class, 8pm Social', 'Aula 19h, Social 20h'],
    is_festival: false,
    is_class: false,
    ticket_link: 'https://www.tickettailor.com/events/labellewinery/972501'
  },
  {
    name: ['Forró Workshop with Luiz Henrique', 'Workshop de Forró com Luiz Henrique'],
    description: ['Even Description 1', 'Descrição do Evento 1'],
    start_datetime: DateTime.now + 2.day,
    end_datetime: DateTime.now + 2.day + 3.hours,
    price: 20.0,
    cover_image: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/luis.jpg',
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/luis.jpg'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    type_event: 'Special Events',
    location: ['The Caledonia', 'Unit 17, Albert Dock, Liverpool L3 4AF', 'https://maps.app.goo.gl/UqS38KGdwpfPwagt5'],
    date: ['10-12 MAY', '10-12 MAIO'],
    time: ['7pm Class, 8pm Social', 'Aula 19h, Social 20h'],
    is_festival: true,
    is_class: true,
    ticket_link: 'https://www.tickettailor.com/events/labellewinery/972501'
  },
  {
    name: ['Forró Workshop with Luiz Henrique', 'Workshop de Forró com Luiz Henrique'],
    description: ['Even Description 2', 'Descrição do Evento 2'],
    start_datetime: DateTime.now + 2.day,
    end_datetime: DateTime.now + 2.day + 3.hours,
    price: 20.0,
    cover_image: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/luis.jpg',
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/luis.jpg'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    type_event: 'Special Events',
    location: ['The Caledonia', 'Unit 17, Albert Dock, Liverpool L3 4AF', 'https://maps.app.goo.gl/UqS38KGdwpfPwagt5'],
    date: ['10-12 MAY', '10-12 MAIO'],
    time: ['7pm Class, 8pm Social', 'Aula 19h, Social 20h'],
    is_festival: false,
    is_class: true,
    ticket_link: 'https://www.tickettailor.com/events/labellewinery/972501'
  },
  {
    name: ['All Levels Forró classes', 'Aula de Forró para todos os níveis'],
    description: ['Even Description 3', 'Descrição do Evento 3'],
    start_datetime: DateTime.now + 2.day,
    end_datetime: DateTime.now + 2.day + 3.hours,
    price: 20.0,
    cover_image: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg',
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    type_event: 'Regular Events',
    location: ['The Caledonia', 'Unit 17, Albert Dock, Liverpool L3 4AF', 'https://maps.app.goo.gl/UqS38KGdwpfPwagt5'],
    date: %w[MONDAY SEGUNDA-FEIRA],
    time: ['7pm Class, 8pm Social', 'Aula 19h, Social 20h'],
    is_festival: false,
    is_class: true,
    ticket_link: 'https://www.tickettailor.com/events/labellewinery/972501'
  },
  {
    name: ['Forró and Chips', 'Forró e Batata Frita'],
    description: ['Live forró music', 'Forró ao vivo'],
    start_datetime: DateTime.now + 2.day,
    end_datetime: DateTime.now + 2.day + 3.hours,
    price: 20.0,
    cover_image: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/abner.jpg',
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/abner.jpg'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    type_event: 'Regular Events',
    location: ['The Caledonia', 'Unit 17, Albert Dock, Liverpool L3 4AF', 'https://maps.app.goo.gl/UqS38KGdwpfPwagt5'],
    date: ['10-12 MAY', '10-12 MAIO'],
    time: ['7pm Class, 8pm Social', 'Aula 19h, Social 20h'],
    is_festival: true,
    is_class: false,
    ticket_link: 'https://www.tickettailor.com/events/labellewinery/972501'
  }
]

events_data.map { |event_data| Event.create!(event_data) }

Site.destroy_all

site = Site.new(
  title: 'Brazilian forró classes & events in the heart of Liverpool',
  description: 'All-levels forró dance classes and live music events in the heart of Liverpool. No partner needed. Everyone is welcome!',
  frame: 'Liverpool forró festival 1st lot tickets',
  cover_image: 'https://www.otempo.com.br/image/contentid/policy:1.2638617:1647968748/Screen-Shot-2022-03-22-at-2-01-35-PM-png.png?f=3x2&q=0.6&w=1200&$p$f$q$w=ceb5660',
  cover_video: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/video.mp4',
  image: [Faker::LoremFlickr.image, Faker::LoremFlickr.image]
)
site.save!

SiteTranslation.destroy_all

site_translation = SiteTranslation.new(
  title: 'Aulas e eventos de forró brasileiro no coração de Liverpool.',
  description: 'Aulas de dança de forró para todos os níveis e eventos com música ao vivo no coração de Liverpool.
  Não é necessário ter um par. Todos são bem-vindos!',
  frame: 'Ingressos para o Festival de Forró de Liverpool 1º lote',
  cover_image: 'https://www.otempo.com.br/image/contentid/policy:1.2638617:1647968748/Screen-Shot-2022-03-22-at-2-01-35-PM-png.png?f=3x2&q=0.6&w=1200&$p$f$q$w=ceb5660',
  cover_video: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/video.mp4',
  image: [Faker::LoremFlickr.image, Faker::LoremFlickr.image]
)
site_translation.save!

Question.destroy_all

questions_data = [
  {
    question: 'What is Forró?',
    answer: 'Forró is culture from the northeast of Brazil that quickly spread to the rest of the country. It is a style of music, dance, and community events that are now celebrated all over the world. The music traditionally employs just 3 instruments: the accordion, the triangle, and the zabumba (a type of drum). Interested in taking a listen? Check out our Spotify playlist, Forró Liverpool.',
    is_festival: false
  },
  {
    question: 'What style of forró do you teach?',
    answer: 'We teach a mix of styles, with a focus on the roots of forró',
    is_festival: false
  },
  {
    question: 'Is there any sort of registration process to sign up for classes?',
    answer: 'Nope! Just show up to class and pay at the door. We accept cash and card.',
    is_festival: false
  },
  {
    question: 'Is any experience required to participate in the festival?',
    answer: 'No, no experience is required.',
    is_festival: true
  },
  {
    question: 'What style of forró do you teach?',
    answer: 'We teach a mix of styles, with a focus on the roots of forró',
    is_festival: true
  }
]

questions_data.map { |question_data| Question.create(question_data) }

QuestionTranslation.destroy_all

question_translations_data = [
  {
    question: 'O que é Forró??',
    answer: 'Forró é uma cultura originária do nordeste do Brasil que se
      espalhou rapidamente por todo o país. É um estilo de música, dança
      e eventos comunitários que agora são celebrados em todo o mundo.
      A música tradicionalmente utiliza apenas 3 instrumentos: o acordeão,
      o triângulo e o zabumba (um tipo de tambor).
      Interessado em ouvir? Confira nossa playlist no Spotify, Forró Liverpool.',
    is_festival: false
  },
  {
    question: 'Que estilo de forró vocês ensinam?',
    answer: 'Nós ensinamos uma mistura de estilos, com foco nas raízes do forró.',
    is_festival: false
  },
  {
    question: 'Como eu faço a inscrição para as aulas?',
    answer: 'Basta aparecer na aula e pagar na entrada. Aceitamos dinheiro e cartão.',
    is_festival: false
  },
  {
    question: 'É necessário ter alguma experiência para participar do festival?',
    answer: 'Não, não é necessário ter experiência.',
    is_festival: true
  },
  {
    question: 'Que estilo de forró vocês ensinam?',
    answer: 'Nós ensinamos uma mistura de estilos, com foco nas raízes do forró.',
    is_festival: true
  }
]

question_translations_data.map { |question_translation_data| QuestionTranslation.create(question_translation_data) }

LiverpoolQuestion.destroy_all

liverpool_questions_data = [
  {
    question: 'By plane',
    answer: 'XXX'
  },
  {
    question: 'By train',
    answer: 'XXX'
  },
  {
    question: 'By BUS',
    answer: 'XXX'
  }
]

liverpool_questions_data.map { |liverpool_question_data| LiverpoolQuestion.create(liverpool_question_data) }

LiverpoolQuestionTranslation.destroy_all

liverpool_question_translations_data = [
  {
    question: 'De avião',
    answer: 'XXX'
  },
  {
    question: 'De trem',
    answer: 'XXX'
  },
  {
    question: 'De ônibus',
    answer: 'XXX'
  }
]

liverpool_question_translations_data.map { |liverpool_question_translation_data| LiverpoolQuestion.create(liverpool_question_translation_data) }

Community.destroy_all
community = Community.new(
  profile_image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/braga.png', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marina.png', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/comunidade.jpg'],
  name: ['Felipe Braga', 'Marina Cerqueira'],
  profile: "Growing up in Recife, Brazil, Marina and Filipe started dancing with their families at a very young age. They were regulars at many forró events in Pernambuco's capital city. They started Forró Liverpool in January 2020, where they teach regular classes, and bring incredible guest teachers, amazing bands, and their own Brazilian culture to the growing forró scene in the city.",
  description: 'We are proudly community-led, with many Liverpool forrozeiras stepping up to organize events, offer marketing support, and teach workshops. Our friendly community is a beautiful mix of Brazilians and folks from all over the world.'
)
community.save!

CommunityTranslation.destroy_all
community_translation = CommunityTranslation.new(
  profile_image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/braga.png', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marina.png', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/comunidade.jpg'],
  name: ['Felipe Braga', 'Marina Cerqueira'],
  profile: "Crescendo em Recife, Brasil, Marina e Filipe iniciaram sua jornada na dança desde muito jovens,
  eram presenças assíduas em diversos eventos de forró na capital de Pernambuco. Em janeiro de 2020, deram vida ao
  Forró Liverpool, não apenas como um espaço para aulas regulares, mas como um ambiente que recebe renomados professores,
   bandas incríveis e compartilha a rica cultura brasileira com a crescente cena de forró na cidade.",
  description: 'Somos orgulhosamente liderados pela comunidade, com muitos forrozeiros de Liverpool se dedicando para
   organizar eventos, oferecer suporte de marketing e ministrar workshops. Nossa comunidade amigável é uma bela
    mistura de brasileiros e pessoas de todo o mundo.'
)
community_translation.save!

Sitefestival.destroy_all

sitefestival = Sitefestival.new(
  navbar: ['Liverpool Forró Festival', 'Classes & Events', 'Our Community', 'FAQ', 'Tickets',
           'Teachers & Musicians', 'Program', 'FAQ', 'Tickets', 'Teachers & Musicians', 'Program', 'Liverpol', 'Festival FAQ'],
  image: [
    'https://www.otempo.com.br/image/contentid/policy:1.2638617:1647968748/Screen-Shot-2022-03-22-at-2-01-35-PM-png.png?f=3x2&q=0.6&w=1200&$p$f$q$w=ceb5660', 'https://www.otempo.com.br/image/contentid/policy:1.2638617:1647968748/Screen-Shot-2022-03-22-at-2-01-35-PM-png.png?f=3x2&q=0.6&w=1200&$p$f$q$w=ceb5660'
  ],
  data: '10-12 MAY, 2024',
  local: 'Liverpool, England',
  video: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/video.mp4',
  textvideo: "3 days of dance classes and parties with incredible forró teachers and musicians from around the world. Come celebrate Brazilian culture in the heart of the UK's music scene!",
  titlevideo: "Forró in the heart of the UK's music scene"
)
sitefestival.save!

SiteFestivalTranslation.destroy_all

site_festival_translation = SiteFestivalTranslation.new(
  navbar: ['Festival de Forró de Liverpool', 'Aulas & Eventos', 'Nossa comunidade', 'Dúvidas', 'Ingressos',
           'Professores & Músicos', 'Programação', 'Dúvidas', 'Ingressos', 'Professores & Músicos', 'Programação', 'Liverpool', 'Dúvidas do Festival'],
  image: [
    'https://www.otempo.com.br/image/contentid/policy:1.2638617:1647968748/Screen-Shot-2022-03-22-at-2-01-35-PM-png.png?f=3x2&q=0.6&w=1200&$p$f$q$w=ceb5660', 'https://www.otempo.com.br/image/contentid/policy:1.2638617:1647968748/Screen-Shot-2022-03-22-at-2-01-35-PM-png.png?f=3x2&q=0.6&w=1200&$p$f$q$w=ceb5660'
  ],
  data: '10-12 MAIO, 2024',
  local: 'Liverpool, Inglaterra',
  video: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/video.mp4',
  textvideo: "3 dias de aulas de dança e festas com incríveis professores e músicos de forró de todo o mundo.
  Venha celebrar a cultura brasileira no coração da cena musical do Reino Unido!",
  titlevideo: 'Forró no coração da cena musical do Reino Unido'
)
site_festival_translation.save!

FestivalTeacher.destroy_all

festival_teachers_data = [
  {
    image: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Yse Goes',
    location: 'Porto',
    function: 'Teacher'
  },
  {
    image: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Felipe e Marina',
    location: 'Liverpool',
    function: 'Teacher'
  },
  {
    image: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Band Name',
    location: 'Liverpool',
    function: 'Band'
  },
  {
    image: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Other band name',
    location: 'Liverpool',
    function: 'Band'
  }
]

festival_teachers_data.map { |festival_teacher_data| FestivalTeacher.create(festival_teacher_data) }

festival_teacher_translations_data = [
  {
    image: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Yse Goes',
    location: 'Porto',
    function: 'Professor'
  },
  {
    image: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Felipe e Marina',
    location: 'Liverpool',
    function: 'Professor'
  },
  {
    image: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Band Name',
    location: 'Liverpool',
    function: 'Banda'
  },
  {
    image: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Other band name',
    location: 'Liverpool',
    function: 'Banda'
  }
]

festival_teacher_translations_data.map { |festival_teacher_translation_data| FestivalTeacherTranslation.create(festival_teacher_translation_data) }
