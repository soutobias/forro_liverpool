# frozen_string_literal: true

require 'faker'

EventUser.destroy_all
User.destroy_all

# first = true
# 10.times do
#   next unless first

#   10.times do
#     user = User.new(
#       name: Faker::Name.name,
#       email: Faker::Internet.email,
#       sell_site_token: SecureRandom.alphanumeric
#     )
#     user.save!
#   end
# end

Event.destroy_all

events_data = [
  {
    name: ['Come Together Party', 'Festa Come Together'],
    description: ['Join us for our opening party!', 'Junte-se a nós para a nossa festa de abertura!'],
    start_datetime: DateTime.new(2024, 5, 10),
    end_datetime: DateTime.new(2024, 5, 10) + 2.years,
    price: '£ 3',
    cover_image: [''],
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg'],
    type_event: 'Party',
    location: ['Revolución de Cuba;Unit 17, Albert Dock, Liverpool l3 4AF;https://maps.app.goo.gl/YzdfS5oGJPXYkReH6'],
    date: %w[Friday Sexta-feira],
    time: ['10pm-3am', '22h-03h'],
    is_festival: "2024",
    is_class: false,
    schedule: ['10pm-12am;DJ Marinês', '12am-3am;DJ Sanguim'],
    schedule_translation: ['22h-00h;DJ Marinês', '00h-03h;DJ Sanguim'],
    ticket_link: 'https://www.tickettailor.com/events/labellewinery/972501'
  },
  {
    name: ['Workshops', 'Workshops'],
    description: ['', ''],
    start_datetime: DateTime.new(2024,05,11),
    end_datetime: DateTime.new(2024,05,11) + 2.years,
    price: '£ 3',
    cover_image: [''],
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg'],
    type_event: 'Workshop',
    location: ['Liverpool Arts Bar;22 Hope St, Liverpool L1 9BY;https://maps.app.goo.gl/AmXKKzQqRjPU6b8t8'],
    date: %w[Saturday Sábado],
    time: ['2-6pm', '14h-18h'],
    is_festival: "2024",
    is_class: true,
    ticket_link: 'https://www.tickettailor.com/events/labellewinery/972501',
    schedule: '#'
  },
  {
    name: ['Yellow Submarine Party', 'Festa Yellow Submarine'],
    description: ['Join us for our headline party! We’re starting out with an amazing coco de roda from our friends at Capoeira For All, followed by  amazing live bands and DJs. Come dressed in your best ’70’s Beatles costume! Check out our style guide below and get inspired!', 'Junte-se a nós em nossa festa principal! Começaremos com um incrível coco de roda dos nossos amigos do Capoeira For All, seguido de incríveis bandas ao vivo e DJs. Venha vestido com sua melhor fantasia dos Beatles dos anos 70! Confira nosso guia de estilo abaixo e inspire-se!'],
    start_datetime: DateTime.new(2024, 5, 11),
    end_datetime: DateTime.new(2024, 5, 11) + 2.years,
    price: '£ 3',
    cover_image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/yellow_submarine.jpg'],
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg'],
    type_event: 'Party',
    location: ['Invisible Wind Factory;3 Regent Rd, Liverpool L3 7DS;https://maps.app.goo.gl/kPq9utDpQTu9RYsD6'],
    date: %w[Saturday Sábado],
    time: ['10pm-4am', '22h-04h'],
    is_festival: "2024",
    is_class: false,
    schedule: ['10-11pm;Coco de roda', '11pm-12am;DJ Marinês', '12-2am;Zeu Azevedo & Abner Brasil', '2-4am;DJ Pastel'],
    schedule_translation: ['22h-23h;Coco de roda', '23h-00h;DJ Marinês', '00h-02h;Zeu Azevedo & Abner Brasil', '02h-04h;DJ Pastel'],
    ticket_link: 'https://www.tickettailor.com/events/labellewinery/972501'
  },
  {
    name: ['Workshops', 'Workshops'],
    description: ['Join us for our opening party', 'Junte-se a nós para a nossa festa de abertura'],
    start_datetime: DateTime.new(2024,05,12),
    end_datetime: DateTime.new(2024,05,12) + 2.years,
    price: '£ 3',
    cover_image: [''],
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    type_event: 'Workshop',
    location: ['24 Hope St Studios;24 Hope St, Liverpool L1 9BX;https://maps.app.goo.gl/MEGs4t7yPkYsi37f9', 'The Annexe;13 Hope St, Liverpool L1 9BQ;https://maps.app.goo.gl/VKYN4PqD6mr5VdXg8'],
    date: %w[Sunday Domingo],
    time: ['2-5pm', '14h-17h'],
    is_festival: "2024",
    is_class: true,
    ticket_link: 'https://www.tickettailor.com/events/labellewinery/972501',
    schedule: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/LFF24-WorkshopSchedule.jpg']
  },
  {
    name: ['Twist & Shout Party', 'Festa Twist & Shout'],
    description: ["Let's close out our festival with even more amazing live music and an excellent DJ set.",
                  'Vamos encerrar o nosso festival com música ao vivo ainda mais incrível e um excelente DJ set.'],
    start_datetime: DateTime.new(2024, 5, 12),
    end_datetime: DateTime.new(2024, 5, 12) + 2.years,
    price: '£ 3',
    cover_image: [''],
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    type_event: 'Party',
    location: ['Revolución de Cuba;Unit 17, Albert Dock, Liverpool l3 4AF;https://maps.app.goo.gl/YzdfS5oGJPXYkReH6'],
    date: %w[Sunday Domingo],
    time: ['8pm-12am', '20h-00h'],
    is_festival: "2024",
    is_class: false,
    schedule: ['8-10pm;Forró & Chips live forró band', '10pm-12am;DJ Pastel'],
    schedule_translation: ['20h-22h;Forró & Chips banda', '22h-00h;DJ Pastel'],
    ticket_link: 'https://www.tickettailor.com/events/labellewinery/972501'
  }
]

events_data.map { |event_data| Event.create!(event_data) }

events_data = [
  {
    name: ['Liverpool Forró Festival 2024', 'Festival de Forró de Liverpool 2024'],
    description: ['',''],
    start_datetime: DateTime.new(2024, 5, 15),
    end_datetime: DateTime.new(2024, 5, 18),
    price: '£ 70',
    cover_image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/festival.jpg'],
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/festival.jpg'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    type_event: 'Special Events',
    date: ['10-12 MAY', '10-12 MAIO'],
    time: ['', ''],
    is_festival: "no",
    is_class: false,
    ticket_link: 'https://www.tickettailor.com/events/labellewinery/972501'
  },
  {
    name: ['Liverpool Forró Festival 2025', 'Festival de Forró de Liverpool 2025'],
    description: ['', ''],
    start_datetime: DateTime.new(2025, 5, 16),
    end_datetime: DateTime.new(2025, 5, 18),
    price: '£ 70',
    cover_image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/cw4ycz0rhzjjtpvmhmwvxbii545x'],
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/cw4ycz0rhzjjtpvmhmwvxbii545x'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    type_event: 'Special Events',
    date: ['16-18 MAY', '16-18 MAIO'],
    time: ['', ''],
    is_festival: "no",
    is_class: false,
    ticket_link: 'https://www.tickettailor.com/events/labellewinery/972501'
  },
  {
    name: ['Forró Workshop with Juzinha', 'Forró Workshop com Juzinha'],
    description: ["Join us for a very special workshop with Juzinha, Pé Descalço's most senior follower! Beginning to dance forró at the age of 8, by 12 she had already achieved the highest level possible within the school. Today, she has partial ownership of Pé Descalço Jardim in Belo Horizonte, Brazil, and is known for her strong presence, technique, and musicality. Through her classes, she motivates and inspires both leaders and followers to bring these attributes out in their own dance.
    No pre-purchase or registration necessary. Just show up and we will see you there!",
                  "Junte-se a nós para um workshop muito especial com Juzinha, a conduzida mais experiente do Pé Descalço! Começou a dançar forró aos 8 anos e, aos 12 já alcançou o nível mais alto possível dentro da escola. Hoje é proprietária parcial do Pé Descalço Jardim, em Belo Horizonte, Brasil, e é conhecida por sua forte presença, técnica e musicalidade. Através de suas aulas, ela motiva e inspira condutores e conduzidos a trazer esses atributos à tona em sua própria dança.
    Não é necessário pré-compra ou registro. É só aparecer e nos vemos lá!"],
    start_datetime: DateTime.new(2024, 3, 27, 19, 0, 0),
    end_datetime: DateTime.new(2024, 3, 27, 23, 0, 0),
    price: '£ 7',
    cover_image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/juzinha.jpg'],
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/juzinha.jpg', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/juzinha.jpg'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.new(2024, 3, 27, 19, 0, 0),
    type_event: 'Special Events',
    location: ['Revolution de Cuba;Unit 17, Albert Dock, Liverpool l3 4AF;https://maps.app.goo.gl/YzdfS5oGJPXYkReH6'],
    date: ['27 Mar', '27 Mar'],
    time: ['7pm Class, 8pm Social', 'Aula 19h, Social 20h'],
    is_festival: "no",
    is_class: true
    # ticket_link: 'https://www.tickettailor.com/events/labellewinery/972501'
  },
  {
    name: ['Forró and Chips', 'Forró e Batata Frita'],
    description: ['Live forró music', 'Forró ao vivo'],
    start_datetime: DateTime.now + 2.day,
    end_datetime: DateTime.now + 2.day + 3.hours,
    price: '£20',
    cover_image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/abner.jpg'],
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/abner.jpg'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    type_event: 'Regular Events',
    location: ['The Caledonia;Unit 17, Albert Dock, Liverpool L3 4AF;https://maps.app.goo.gl/UqS38KGdwpfPwagt5'],
    date: ['10-12 MAY', '10-12 MAIO'],
    time: ['7pm Class, 8pm Social', 'Aula 19h, Social 20h'],
    is_festival: true,
    is_class: false,
    ticket_link: 'https://www.tickettailor.com/events/labellewinery/972501'
  },
  {
    name: [
      "All-levels Forró Classes",
      "Aulas de Forró - Todos níveis "
    ],
    description: [
      "Forró classes in the heart of Liverpool. Find us upstairs above the Caledonia. Check out our Instagram page for the latest events and news, like class cancellations or delays.\n    No pre-purchase or registration necessary. Just show up and we will see you there!",
      "Aulas de Forró no coração de Liverpool. Estamos esperando por você no andar de cima do Caledonia. Fique de olho na nossa página do Instagram para os últimos eventos e notícias, como cancelamentos ou atrasos de aulas.\n    Não é necessário pré-compra ou registro. É só aparecer e nos vemos lá!"
    ],
    start_datetime: "2035-02-01T13:25:56.874Z",
    end_datetime: "2035-02-01T16:25:56.874Z",
    price: "£ 3",
    image: [
      "https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg",
      "https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg"
    ],
    registration_start_datetime: "2024-01-31T13:25:56.874Z",
    registration_end_datetime: "2024-02-02T13:25:56.874Z",
    type_event: "Regular Events",
    location: [
      "The Caledonia;22 Caledonia St, Liverpool L7 7DX;https://maps.app.goo.gl/UqS38KGdwpfPwagt5"
    ],
    date: [
      "Mondays",
      "Segunda-feira"
    ],
    time: [
      "7pm class, 8pm social",
      "Aula as 19:00, baile as 20:00"
    ],
    is_festival: "no",
    is_class: true,
    cover_image: [
      "https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg"
    ]
  }
]

events_data.map { |event_data| Event.create!(event_data) }

Site.destroy_all

site = Site.new(
  title: 'Brazilian forró classes & events in the heart of Liverpool',
  description: 'All-levels forró dance classes and live music events in the heart of Liverpool. No partner needed. Everyone is welcome!',
  frame: 'Liverpool Forró Festival Lote 1 Tickets available now! - Get Tickets! - ',
  cover_image: ['https://www.otempo.com.br/image/contentid/policy:1.2638617:1647968748/Screen-Shot-2022-03-22-at-2-01-35-PM-png.png?f=3x2&q=0.6&w=1200&$p$f$q$w=ceb5660'],
  cover_video: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/ForroLiverpoolIntro.webm',
  image: [Faker::LoremFlickr.image, Faker::LoremFlickr.image]
)
site.save!

SiteTranslation.destroy_all

site_translation = SiteTranslation.new(
  title: 'Aulas de Forró no coração de Liverpool',
  description: 'Aulas de Forró para todos os níveis, workshops e bandas brasileiras aqui em Liverpool. Não precisa trazer parceiro. Todos são bem-vindos!',
  frame: 'Liverpool Forró Festival - Ingressos do Lote 1 disponíveis agora! - Compre Ingressos! - ',
  cover_image: ['https://www.otempo.com.br/image/contentid/policy:1.2638617:1647968748/Screen-Shot-2022-03-22-at-2-01-35-PM-png.png?f=3x2&q=0.6&w=1200&$p$f$q$w=ceb5660'],
  cover_video: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/ForroLiverpoolIntro.webm',
  image: [Faker::LoremFlickr.image, Faker::LoremFlickr.image]
)
site_translation.save!

Question.destroy_all

questions_data = [
  {
    question: 'What is forró?',
    answer: 'Forró is culture from the northeast of Brazil that quickly spread to the rest of the country. It is a style of music, dance, and community events that are now celebrated all over the world. The music traditionally employs just 3 instruments: the accordion, the triangle, and the zabumba (a type of drum). Interested in taking a listen? Check out our Spotify playlist, Forró Liverpool.',
    is_festival: false
  },
  {
    question: 'What style of forró do you teach?',
    answer: 'We teach a mix of styles, focusing on traditional Pé-de-Serra and and incorporating elements of Roots and Universitário style. We also love arrastapé!',
    is_festival: false
  },
  {
    question: 'Are there different levels or an academic curriculum?',
    answer: 'As we grow our community, all of our classes and workshops are all-levels, allowing dancers to join in at any time of the year. In the future, we would like to offer a more structured curriculum of forró study, to better accommodate dancers at every level of experience.',
    is_festival: false
  },
  {
    question: 'Is there any sort of registration process to sign up for classes?',
    answer: 'Our regular Monday classes do not require any sort of registration. Simply show up at the Caledonia and join in!
      For special workshops and events, you can find event registration details in the Classes & Events section of this website. Most of our special workshops offer an optional pre-registration, but you are welcome to pay for your ticket in person at the time of the event. Please see specific event details for more information.',
    is_festival: false
  },
  {
    question: 'How do I pay for classes?',
    answer: 'You may pay for regular Monday classes (£3) in cash or by bank transfer at the time of the class. Please speak to Filipe or Marina for bank transfer details.
    Special events with optional or mandatory pre-registration can be paid for online. Please see specific event details for the event you are interested in for more information.',
    is_festival: false
  },
  {
    question: 'What do I need to bring with me to classes?',
    answer: ' Forró can get quite warm! We recommend a bottle of water, lightweight clothing you can comfortably move around in, and trainers with socks (or, Havaianas like a true Brazilian).',
    is_festival: false
  },
  {
    question: 'Can I come to a class by myself? Will I have to dance with strangers?',
    answer: 'You are welcome and encouraged to show up by yourself to any of our events! Classes and workshops typically rotate partners so that you build adaptability in your dance. However, if you are more comfortable dancing with just one specific partner whom you bring along with you, you are welcome to do that too! For many beginners, they find they are most comfortable dancing with a friend or loved one until they build confidence in their forró skills.',
    is_festival: false
  },
  {
    question: 'Are classes appropriate for all levels?',
    answer: 'All of our classes, workshops, and events are appropriate for all levels. We provide one-on-one guidance for complete beginners, general skill-building for beginner-intermediate dancers, and finely-tuned feedback and challenging variations for more advanced forrozeiras.',
    is_festival: false
  },
  {
    question: 'What language are classes in?',
    answer: 'Our regular classes are conducted in English by two Brazilian, Portuguese native-speakers. Parts of the class are sometimes translated into Portuguese, and you are welcome to ask questions in either language.
    Most of our special workshops are conducted in English, but a vast majority of teachers speak fluent Portuguese. There will always be a Portuguese native speaker in any class or workshop who would be happy to translate.',
    is_festival: false
  },
  {
    question: 'Is the festival appropriate for all levels?',
    answer: 'The festival is open to all levels! Some classes will be for more advanced dancers and some for newer or all-levels. The class schedule with appropriate levels indicated will be released in the days before the festival. All levels will be welcomed in the parties!',
    is_festival: true
  },
  {
    question: 'Do I need to attend the festival with a dance partner, or can I come by myself?',
    answer: 'You may choose to come with a partner (please be sure both partners have purchased a ticket!) but it is very typical to come solo.',
    is_festival: true
  },
  {
    question: 'What is weather like in Liverpool in May? What should I bring?',
    answer: 'Weather is mild, with daytime temperatures around 15°C (60°F). There will likely be a 50% chance of rain, so pack an umbrella! All events are indoors, and forró events can get WARM! We recommend light clothing that allows you to move easily for classes and parties.',
    is_festival: true
  },
  {
    question: 'I bought a ticket but can no longer attend. Can I get a refund?',
    answer: 'Unfortunately we are not equipped to offer refunds in this circumstance. However, please reach out to us by email (hello@forroliverpool.co.uk) or Instagram DM (@forro.liverpool) and we will do our best to help you sell your ticket.',
    is_festival: true
  },
  {
    question: 'Where do I go to check in?',
    answer: "Check-in will be open for an hour before Friday's party, and an hour before Saturday's classes and party. Check the Program section above, where we will announce all check-in details a few days before the start of the festival.",
    is_festival: true
  },
  {
    question: 'Can I buy a ticket in-person at check-in?',
    answer: 'If we have tickets available at the time, yes, we will be selling tickets at the door. Payments are accepted in cash or by bank transfer, or you may use this wesite to purchase tickets by credit card.',
    is_festival: true
  },
  {
    question: 'If the event is cancelled, how will I get a refund?',
    answer: "We don't expect to have to cancel the event, but if we do, refunds will be processed in order of purchase, to the original payment method.",
    is_festival: true
  },
  {
    question: 'Can I exchange ticket types from full pass to party pass, or vice versa?',
    answer: "Our ability to exchange tickets depends on availability. We'll handle this on a case-by-case basis, so reach out to us by email (hello@forroliverpool.co.uk) or Instagram DM (@forro.liverpool) to discuss.",
    is_festival: true
  },
  {
    question: 'Are there concession or discounted tickets available?',
    answer: "We aren't able to offer consession tickets at the moment. However, we are offering a group discount for our Lote 1 (early bird) tickets only: purchase 10 tickets for a total of £500. Reach out to us by email (hello@forroliverpool.co.uk) or Instagram DM (@forro.liverpool) for details, as this offer is available only by bank transfer.",
    is_festival: true
  },
  {
    question: 'Are the classes and parties accessible to disabled dancers?',
    answer: 'We are still confirming venues, but most likely, 1 of 3 parties will be accessible, and the classes venue will be accessible. Please check back regularly, as we are prioritizing booking spaces so that dancers of all abilities can join us.',
    is_festival: true
  }
]

questions_data.map { |question_data| Question.create(question_data) }

QuestionTranslation.destroy_all

question_translations_data = [
  {
    question: 'O que é Forró??',
    answer: 'Forró é uma manifestação cultural do povo nordestino que rapidamente se espalhou pelo Brasil. É um estilo musical, uma dança e uma festa que faz parte da identidade nacional. Tradicionalmente, a música é composta da harmonia da sanfona, do grava da zabumba e da percussão aguda do triângulo. Ficou curioso? Dá uma sacada então nessa playlist do Forró Liverpool.',
    is_festival: false
  },
  {
    question: 'Que estilo de Forró vocês ensinam?',
    answer: 'A gente ensina um forró pé-de-serra com elementos de roots e universitário. Também amamos um arrastapé!',
    is_festival: false
  },
  {
    question: 'As aulas são divididas em níveis?',
    answer: 'Nossa comunidade vem crescendo, por enquanto as aulas englobam vários níveis e nós tentamos fazer algo que seja desafiador e interessante para todos. No futuro nós temos planos de iniciar aulas separadas por níveis para as pessoas avançarem mais na dança.',
    is_festival: false
  },
  {
    question: 'Precisa se registrar para fazer a aula?',
    answer: 'Não, é só chegar! Nossas aulas regulares são Segunda-Feira a noite 7pm no pub The Caledonia. Para eventos especiais, com professores ou bandas convidadas, você pode encontrar os detalhes em Eventos Especiais, onde o registro antecipado é opcional ou você também pode pagar no dia do evento.',
    is_festival: false
  },
  {
    question: 'Como posso pagar as aulas?',
    answer: 'As aulas semanais custam £3 e pode ser pago em dinheiro no dia ou por transferência bancária. Fala com a gente no dia da aula que a gente desenrola. Nos eventos especiais o pagamento pode ser online antecipado ou no dia também.',
    is_festival: false
  },
  {
    question: 'O que eu preciso levar paras aulas?',
    answer: 'Forró é uma dança de contato e um exercício físico, então lembra de trazer água, roupas leves e sapatos confortáveis. Você também pode fazer a aula descalço, de meia ou de Havaianas (no estilo forrozeiro).',
    is_festival: false
  },
  {
    question: 'Posso ir as aulas sozinho? Terei que dançar com outras pessoas?',
    answer: 'Sim, você pode vir para qualquer evento sem trazer ninguém junto. Durante as aulas e workshops, a a gente recomenda que você troque de parceiros para se adaptar ao estilo de diferentes dançarinos. Muitas pessoas preferem ficar com o seu próprio companheiro durante a aula, o que também é de boa. Nós queremos que todos se sintam confortáveis nas aulas. Muitas pessaos fazem isso no início e depois com mais confiança começam a dançar com a turma toda.',
    is_festival: false
  },
  {
    question: 'As aulas são para todos os níveis?',
    answer: 'As aulas e workshops são abertas para qualquer pessoa de diferentes nívies. Se for sua primeira vez no Forró, nos vamos te acompanhar de perto enquanto o resto da turma segue o cronograma. A ideia é sempre incluir novos passos e sequências que se adaptem ao níveil de todos e cada um vai sair com alguma coisa pra si da aula. ',
    is_festival: false
  },
  {
    question: 'Em que língua são as aulas?',
    answer: 'Nossas aulas são em inglês, mas como temos um casal de professores brasileiros e alunos que também falam português, nós conseguimos ensinar nas duas línguas. Com alguns professores convidados nós fazemos tradução simultânea durante a aula. Não se preocupe, de alguma maneira vamos conseguir nos comunicar!',
    is_festival: false
  },
  {
    question: 'O festival é para todos os níveis?',
    answer: 'O festival será para forrozeiros e forrozeiras de todos os níveis! Algumas aulas serão para dançarinos mais avançados e outras para dançarinos menos experientes. O horário das aulas, com indicação dos níveis, será divulgado dias antes do festival. Todos os níveis serão bem vindos nas festas! ',
    is_festival: true
  },
  {
    question: 'Eu precisso de um(a) parceiro(a) de dança para ir ao festival?',
    answer: 'Você pode optar por vir acompanhado com o seu par (por favor, certifiquem-se que ambos tenham comprado os ingressos), mas é bem comum vir sozinho a festivais. ',
    is_festival: true
  },
  {
    question: 'Como é o clima em Liverpool em Maio? O que devo levar?',
    answer: 'O clima é suave, com temperaturas chegando a 15°C (60°F) durante o dia. Provavelmente teremos uns 50% de chance de chuvas, então traga um guarda-chuva! Todos os eventos serão em areas internas e festas de forró podem ficar QUENTES! Recomendamos roupas leves que deixem vocês se movimentarem com facilidade para as aulas e para as festas.',
    is_festival: true
  },
  {
    question: 'Comprei um ingresso e não posso mais ir. Eu consigo um reembolso?',
    answer: 'Infelizmente a gente não pode oferecer esse reembolso. Mas por favor, entra em contato com a gente no nosso e-mail (hello@forroliverpool.co.uk) ou manda uma mensagem no nosso Insta (@forro.liverpool) e a gente vai fazer o nosso melhor pra ajudar você a vender seu ticket.',
    is_festival: true
  },
  {
    question: 'Onde vou para fazer o check-in?',
    answer: 'Infelizmente a gente não pode oferecer esse reembolso. Mas por favor, entra em contato com a gente no nosso e-mail (hello@forroliverpool.co.uk) ou manda uma menssagem no nosso Insta (@forro.liverpool) e a gente vai fazer o nosso melhor pra ajudar você a vender seu ticket.',
    is_festival: true
  },
  {
    question: 'Posso comprar um ingresso pessoalmente no momento do check-in?',
    answer: 'Se ainda tivermos ingressos disponiveis, sim, venderemos ingressos na porta dos eventos. Aceitaremos pagamentos em dinheiro ou transferências bancárias, ou pode usar o nosso site para comprar com o seu cartão de crédito.',
    is_festival: true
  },
  {
    question: 'Se o evento for cancelado, como vou conseguir meu reembolso?',
    answer: 'A gente espera não cancelar esse lindo evendo, mas se acontecer, os reembolsos serão feitos por ordem de compra, para o método de pagamento de origem.',
    is_festival: true
  },
  {
    question: 'Eu posso alterar o tipo do meu ingresso de full pass para party pass ou vice e versa?',
    answer: 'A possibilidade de troca de ingressos dependerá da disponibilidade. Trataremos os casos individualmente, portanto, entre em contato conosco por e-mail (hello@forroliverpool.co.uk) ou por mensagem direta no Instagram (@forro.liverpool) para conversarmos melhor.',
    is_festival: true
  },
  {
    question: 'Existe a disponibilidade de ingressos com descontos?',
    answer: 'No momento, não podemos oferecer ingressos com desconto. No entanto, estamos disponibilizando um desconto para grupos apenas nos ingressos do Lote 1 (early bird): compre 10 ingressos por um total de £500. Entre em contato conosco por e-mail (hello@forroliverpool.co.uk) ou por mensagem direta no Instagram (@forro.liverpool) para obter detalhes, pois esta oferta está disponível apenas por transferência bancária.',
    is_festival: true
  },
  {
    question: 'As aulas e as festas são acessiveis para pessoas com deficiência?',
    answer: 'Ainda estamos confirmando os locais, mas é provável que pelo menos 1 das 3 festas seja acessível, e o local das aulas também será acessível. Verifique regularmente, pois estamos priorizando a reserva de espaços para que forrozeiros de todas as habilidades possam participar.',
    is_festival: true
  }
]

question_translations_data.map { |question_translation_data| QuestionTranslation.create(question_translation_data) }

LiverpoolQuestion.destroy_all

liverpool_questions_data = [
  {
    question: 'By plane',
    answer: 'You can fly into Liverpool John Lennon Airport (LPL) and take a ~25 minute Uber to Liverpool city center. Alternatively, you can fly into Manchester Airport (MAN) and take a bus or a train of approximately 1 hour to Liverpool (see details below).'
  },
  {
    question: 'By train',
    answer: 'Book tickets on the thetrainline.com to Liverpool Lime Street.'
  },
  {
    question: 'By bus',
    answer: 'Book tickets on nationalexpress.co.uk to Liverpool One Bus Station or Queens Square Bus Station.'
  }
]

liverpool_questions_data.map { |liverpool_question_data| LiverpoolQuestion.create(liverpool_question_data) }

LiverpoolQuestionTranslation.destroy_all

liverpool_question_translations_data = [
  {
    question: 'De avião',
    answer: 'O Liverpool John Lennon Airport fica a 25 minutos de carro do centro da cidade. O aeroporto de Manchester, segundo maior aeroporto do Reino Unido, fica a uma hora de Liverpool de trem ou ônibus.'
  },
  {
    question: 'De trem',
    answer: 'Compre as passagems em thetrainline.com para a estação Liverpool Lime Street.'
  },
  {
    question: 'De ônibus',
    answer: 'Compre as passagens em nationalexpress.co.uk para a estação Liverpool One.'
  }
]

liverpool_question_translations_data.map { |liverpool_question_translation_data| LiverpoolQuestionTranslation.create(liverpool_question_translation_data) }

Community.destroy_all
community = Community.new(
  profile_image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/braga.png', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marina.png', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/community.jpg'],
  name: ['Filipe Braga', 'Marina Cerqueira'],
  profile: "Growing up in Recife, Brazil, Marina and Filipe started dancing with their families at a very young age. They were regulars at many forró events in Pernambuco's capital city. They started Forró Liverpool in January 2020, where they teach regular classes, and bring incredible guest teachers, amazing bands, and their own Brazilian culture to the growing forró scene in the city.",
  description: 'We are proudly community-led, with many Liverpool forrozeiras stepping up to organize events, offer marketing support, and teach workshops. Our friendly community is a beautiful mix of Brazilians and folks from all over the world.'
)
community.save!

CommunityTranslation.destroy_all
community_translation = CommunityTranslation.new(
  profile_image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/braga.png', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marina.png', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/community.jpg'],
  name: ['Filipe Braga', 'Marina Cerqueira'],
  profile: 'Nascidos em Recife, Filipe e Marina sempre dançaram Forró com seus familiares desde de pequenos. Eles eram figurinhas carimbadas nos Forrós Pernambucanos, como Xin Xin da Bahiana, Casbah e Casa Astral, onde eles se conheceram. Apaixonados por Maracatu, Frevo, Coco e Cavalo Marinho, eles integram cultura regional no seu Forró. O grupo Forró Liverpool foi criado com o intuito de espalhar essa cultura que eles tanto amam por aqui.',
  description: 'Nosso grupo é baseado no conceito de comunidade com várias forrozeiras locais organizando eventos, criando uma identidade para o grupo e dando workshops. No nosso grupo todo mundo é bem-vindo, com gente do Brasil e mundo afora.'
)
community_translation.save!

Sitefestival.destroy_all

sitefestival = Sitefestival.new(
  navbar: ['Liverpool Forró Festival', 'Classes & Events', 'Our Community', 'FAQ', 'Tickets',
           'Teachers & Musicians', 'Program', 'FAQ', 'Tickets', 'Teachers & Musicians', 'Program', 'Liverpol', 'Festival FAQ'],
  image: [
    'https://www.otempo.com.br/image/contentid/policy:1.2638617:1647968748/Screen-Shot-2022-03-22-at-2-01-35-PM-png.png?f=3x2&q=0.6&w=1200&$p$f$q$w=ceb5660', 'https://www.otempo.com.br/image/contentid/policy:1.2638617:1647968748/Screen-Shot-2022-03-22-at-2-01-35-PM-png.png?f=3x2&q=0.6&w=1200&$p$f$q$w=ceb5660'
  ],
  data: '10-12 May, 2024',
  local: 'Liverpool, England',
  video: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/video.mp4',
  textvideo: "3 days of dance classes and parties with incredible forró teachers and musicians from around the world. Come celebrate Brazilian culture in the heart of the UK's music scene.",
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
  data: '10-12 de Maio, 2024',
  local: 'Liverpool, Inglaterra',
  video: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/video.mp4',
  textvideo: 'Três dias cheios de aulas e festas com artistas incríveis do mundo afora. Vem curtir com a gente esse festival de cultura brasileira na cidade natal dos Beatles.',
  titlevideo: 'Forró na cidade mais musical da Inglaterra'
)
site_festival_translation.save!

Site2025Festival.destroy_all

sitefestival = Site2025Festival.new(
  navbar: ['Liverpool Forró Festival', 'Classes & Events', 'Our Community', 'FAQ', 'Tickets',
           'Teachers & Musicians', 'Program', 'FAQ', 'Tickets', 'Teachers & Musicians', 'Program', 'Liverpol', 'Festival FAQ'],
  image: [
    'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/21idj12pofld4m00xiybfvogq7kb', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/21idj12pofld4m00xiybfvogq7kb'
  ],
  data: '16-18 May, 2025',
  local: 'Liverpool, England',
  video: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/LFF25-TicketLaunch.mp4',
  textvideo: "Join us for 3 days of dance classes and parties: even more live music, talented teachers, and forró magic. Come let Brazilian culture inspire you, right here in the Beatles' hometown.",
  titlevideo: "Brazilian music & dance, back for year 2!"
)
sitefestival.save!

Site2025FestivalTranslation.destroy_all

site_festival_translation = Site2025FestivalTranslation.new(
  navbar: ['Festival de Forró de Liverpool', 'Aulas & Eventos', 'Nossa comunidade', 'Dúvidas', 'Ingressos',
           'Professores & Músicos', 'Programação', 'Dúvidas', 'Ingressos', 'Professores & Músicos', 'Programação', 'Liverpool', 'Dúvidas do Festival'],
  image: [
    'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/21idj12pofld4m00xiybfvogq7kb', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/21idj12pofld4m00xiybfvogq7kb'
  ],
  data: '16-18 de Maio, 2025',
  local: 'Liverpool, Inglaterra',
  video: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/LFF25-TicketLaunch.mp4',
  textvideo: 'Vem curtir 3 dias de aulas e festas: ainda mais música ao vivo, professores talentosos e a magia do forró. Deixe a cultura brasileira te inspirar, bem aqui na cidade natal dos Beatles.',
  titlevideo: 'Música e dança brasileira, de volta para o segundo ano!'
)
site_festival_translation.save!

FestivalTeacher.destroy_all
Festival2025Teacher.destroy_all

festival_teachers_data = [
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/Yse.jpg'],
    name: 'Yse Góes',
    location: 'Porto',
    function: 'Teacher'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/Marilia.jpg'],
    name: 'Marilia Cervi',
    location: 'Lyon',
    function: 'Teacher'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/Zeu.jpg'],
    name: 'Zeu Azevedo',
    location: 'London',
    function: 'Live Band'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/abner.jpg'],
    name: 'Abner Brasil',
    location: 'Liverpool',
    function: 'Live Band'
  },
  # {
  #   image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg'],
  #   name: 'Filipe e Marina',
  #   location: 'Liverpool',
  #   function: 'Teachers'
  # },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/Pastel.jpg'],
    name: 'DJ Pastel',
    location: 'Porto',
    function: 'DJ'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/sanguim.jpg'],
    name: 'DJ Sanguim',
    location: 'London',
    function: 'DJ'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/Artistas-Marines-600px.jpg'],
    name: 'DJ Marinês',
    location: 'Turin',
    function: 'DJ'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/arthur_teacher.jpg'],
    name: 'Arthur Lorenzo',
    location: 'Belo Horizonte',
    function: 'Teacher'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/felipe_abreu.jpg'],
    name: 'Felipe Abreu',
    location: 'Salvador',
    function: 'Teacher'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/guga_santos1_liveband.jpg'],
    name: 'Guga Santos',
    location: 'Olinda',
    function: 'Live Band'
  }
]

festival_teachers_data.map { |festival_teacher_data| FestivalTeacher.create(festival_teacher_data) }

festival_teachers_data = [
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/rrks6ayi25saxxk1kfxe0nk84luu'],
    name: 'Camila Alves',
    location: 'Lisbon',
    function: 'Teacher'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/dnx215cin4vil4ellunzv3tgyd41'],
    name: 'Yse Góes',
    location: 'Porto',
    function: 'Teacher'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/tasmb0l2ygkf2qwjsextuu6z3d8t'],
    name: 'Daniel Marinho',
    location: 'Salvador',
    function: 'Teacher'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/david_isa.jpg'],
    name: 'David Bosco & Isa Monti',
    location: 'Barcelona',
    function: 'Teacher'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/0uryfeb5urj0s7q0yqqcw6gs235e'],
    name: 'DJ Márcio',
    location: 'São Paulo',
    function: 'DJ'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/gbysat1d6ol8yp9mx73n0jvtqgqa'],
    name: 'DJ Pastel',
    location: 'Porto',
    function: 'DJ'
  }

]

festival_teachers_data.map { |festival_teacher_data| Festival2025Teacher.create(festival_teacher_data) }

FestivalTeacherTranslation.destroy_all
Festival2025TeacherTranslation.destroy_all

festival_teacher_translations_data = [
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/Yse.jpg'],
    name: 'Yse Góes',
    location: 'Porto',
    function: 'Professora'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/Marilia.jpg'],
    name: 'Marilia Cervi',
    location: 'Lyon',
    function: 'Professora'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/Zeu.jpg'],
    name: 'Zeu Azevedo',
    location: 'Londres',
    function: 'Banda'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/abner.jpg'],
    name: 'Abner Brasil',
    location: 'Liverpool',
    function: 'Banda'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/Pastel.jpg'],
    name: 'DJ Pastel',
    location: 'Porto',
    function: 'DJ'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/sanguim.jpg'],
    name: 'DJ Sanguim',
    location: 'Londres',
    function: 'DJ'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/Artistas-Marines-600px.jpg'],
    name: 'DJ Marinês',
    location: 'Torino',
    function: 'DJ'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/arthur_teacher.jpg'],
    name: 'Arthur Lorenzo',
    location: 'Belo Horizonte',
    function: 'Professor'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/felipe_abreu.jpg'],
    name: 'Felipe Abreu',
    location: 'Salvador',
    function: 'Professor'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/guga_santos1_liveband.jpg'],
    name: 'Guga Santos',
    location: 'Olinda',
    function: 'Banda'
  }
]

festival_teacher_translations_data.map { |festival_teacher_translation_data| FestivalTeacherTranslation.create(festival_teacher_translation_data) }

festival_teacher_translations_data = [
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/rrks6ayi25saxxk1kfxe0nk84luu'],
    name: 'Camila Alves',
    location: 'Lisboa',
    function: 'Professora'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/dnx215cin4vil4ellunzv3tgyd41'],
    name: 'Yse Góes',
    location: 'Porto',
    function: 'Professora'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/tasmb0l2ygkf2qwjsextuu6z3d8t'],
    name: 'Daniel Marinho',
    location: 'Salvador',
    function: 'Professor'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/david_isa.jpg'],
    name: 'David Bosco & Isa Monti',
    location: 'Barcelona',
    function: 'Professores'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/0uryfeb5urj0s7q0yqqcw6gs235e'],
    name: 'DJ Márcio',
    location: 'São Paulo',
    function: 'DJ'
  },
  {
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/gbysat1d6ol8yp9mx73n0jvtqgqa'],
    name: 'DJ Pastel',
    location: 'Porto',
    function: 'DJ'
  }
]


festival_teacher_translations_data.map { |festival_teacher_translation_data| Festival2025TeacherTranslation.create(festival_teacher_translation_data) }


Lote.destroy_all

lote_data = [
  {
    lote_number: 3,
    start_datetime: 'Tue, 01 Apr 2025 16:00:00.000000000 UTC +00:00',
    end_datetime: 'Mon, 19 May 2025 00:00:00.000000000 UTC +00:00',
    status: ['', ''],
    status2: ['Limited quantities available.', 'Quantidades limitadas.']
  },
  {
    lote_number: 2,
    start_datetime: 'Fri, 01 Mar 2025 16:00:00.000000000 UTC +00:00',
    end_datetime: 'Tue, 01 Apr 2025 16:00:00.000000000 UTC +00:00',
    status: ['', ''],
    status2: ['Limited quantities available.', 'Quantidades limitadas.'],
  },
  {
    lote_number: 1,
    start_datetime: 'Wed, 15 Jan 2025 15:58:00.000000000 UTC +00:00',
    end_datetime: 'Fri, 01 Mar 2025 16:00:00.000000000 UTC +00:00',
    status:
    ['Available 15 January at 4pm GMT', 'Disponível em 15 de Janeiro, às 16h'],
    status2: ['Limited quantities available.', 'Quantidades limitadas.']
  }
]

lote_data.map { |lote| Lote.create(lote) }

Ticket.destroy_all

ticket_data = [
  {
    price: 75,
    ticket_type: ['Full Pass', 'Passe Completo'],
    forro_class: ['All Classes', 'Todas as aulas'],
    forro_party: ['All Parties', 'Todas as festas'],
    lote: 1
  },
  {
    price: 50,
    ticket_type: ['Party Pass', 'Passe para festas'],
    forro_class: [],
    forro_party: ['All Parties', 'Todas as festas'],
    lote: 1
  },
  {
    price: 20,
    ticket_type: ['SPECIAL PRICE! Saturday party only', 'PREÇO ESPECIAL! Somente Festa de sábado'],
    forro_class: [],
    forro_party: ['Saturday Party', 'Festa de sábado'],
    lote: 1
  },
  {
    # price: 65,
    ticket_type: ['Full Pass', 'Passe completo'],
    forro_class: ['All Classes', 'Todas as aulas'],
    forro_party: ['All Parties', 'Todas as festas'],
    lote: 2
  },
  {
    # price: 90,
    ticket_type: ['Party Pass', 'Passe para festas'],
    forro_class: [],
    forro_party: ['All Parties', 'Todas as festas'],
    lote: 2
  },
  {
    # price: 20,
    ticket_type: ['SPECIAL PRICE! Saturday party only', 'PREÇO ESPECIAL! Somente Festa de sábado'],
    forro_class: [],
    forro_party: ['Saturday Party', 'Festa de sábado'],
    lote: 2
  },
  {
    # price: 110,
    ticket_type: ['Full Pass', 'Passe Completo'],
    forro_class: ['All Classes', 'Todas as aulas'],
    forro_party: ['All Parties', 'Todas as festas'],
    lote: 3
  },
  {
    # price: 85,
    ticket_type: ['Party Pass', 'Passe para festas'],
    forro_class: [],
    forro_party: ['All Parties', 'Todas as festas'],
    lote: 3
  },
  {
    # price: 30,
    ticket_type: ['SPECIAL PRICE! Saturday party only', 'PREÇO ESPECIAL! Somente Festa de sábado'],
    forro_class: [],
    forro_party: ['Saturday Party', 'Festa de sábado'],
    lote: 3
  }
]

ticket_data.map { |ticket| Ticket.create(ticket) }
