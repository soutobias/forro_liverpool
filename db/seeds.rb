# frozen_string_literal: true

# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

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
    name: 'Liverpool Forró Festival 2024',
    description: 'Forró classes in the heart of Liverpool. Find us upstairs above the Caledonia. Check out our Instagram page for the latest events and news, like class cancellations or delays. No pre-purchase or registration necessary. Just show up and we will see you there!',
    start_datetime: DateTime.now + 2.day,
    end_datetime: DateTime.now + 2.day + 3.hours,
    price: 20.0,
    cover_image: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/festival.jpg',
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/festival.jpg'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    sell_site_number: SecureRandom.alphanumeric,
    type_event: 'Special Events',
    location: ['The Caledonia', 'Unit 17, Albert Dock, Liverpool L3 4AF', 'https://maps.app.goo.gl/UqS38KGdwpfPwagt5'],
    date: '10-12 MAY',
    time: '7pm Class, 8pm Social',
    is_festival: false,
    is_class: false
  },
  {
    name: 'Forró Workshop with Luiz Henrique',
    description: 'Descrição do Evento 2',
    start_datetime: DateTime.now + 2.day,
    end_datetime: DateTime.now + 2.day + 3.hours,
    price: 20.0,
    cover_image: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/luis.jpg',
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/luis.jpg'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    sell_site_number: SecureRandom.alphanumeric,
    type_event: 'Special Events',
    location: ['The Caledonia', 'Unit 17, Albert Dock, Liverpool L3 4AF', 'https://maps.app.goo.gl/UqS38KGdwpfPwagt5'],
    date: '10 MAY',
    time: '7pm Class, 8pm Social',
    is_festival: true,
    is_class: true
  },
  {
    name: 'Forró Workshop with Luiz Henrique',
    description: 'Descrição do Evento 2',
    start_datetime: DateTime.now + 2.day,
    end_datetime: DateTime.now + 2.day + 3.hours,
    price: 20.0,
    cover_image: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/luis.jpg',
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/luis.jpg'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    sell_site_number: SecureRandom.alphanumeric,
    type_event: 'Special Events',
    location: ['The Caledonia', 'Unit 17, Albert Dock, Liverpool L3 4AF', 'https://maps.app.goo.gl/UqS38KGdwpfPwagt5'],
    date: '10 MAY',
    time: '7pm Class, 8pm Social',
    is_festival: false,
    is_class: true
  },
  {
    name: 'All Levels Forró classes',
    description: 'Descrição do Evento 3',
    start_datetime: DateTime.now + 2.day,
    end_datetime: DateTime.now + 2.day + 3.hours,
    price: 20.0,
    cover_image: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg',
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marinaebraga.jpg'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    sell_site_number: SecureRandom.alphanumeric,
    type_event: 'Regular Events',
    location: ['The Caledonia', 'Unit 17, Albert Dock, Liverpool L3 4AF', 'https://maps.app.goo.gl/UqS38KGdwpfPwagt5'],
    date: 'MONDAYS',
    time: '7pm Class, 8pm Social',
    is_festival: false,
    is_class: true
  },
  {
    name: 'Forró and Chips',
    description: 'live forró music',
    start_datetime: DateTime.now + 2.day,
    end_datetime: DateTime.now + 2.day + 3.hours,
    price: 20.0,
    cover_image: 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/abner.jpg',
    image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/abner.jpg'],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    sell_site_number: SecureRandom.alphanumeric,
    type_event: 'Regular Events',
    location: ['The Caledonia', 'Unit 17, Albert Dock, Liverpool L3 4AF', 'https://maps.app.goo.gl/UqS38KGdwpfPwagt5'],
    date: 'WEDNESDAYS',
    time: '7pm Class, 8pm Social',
    is_festival: true,
    is_class: false
  }
]

events = events_data.map { |event_data| Event.create!(event_data) }

events.each do |event|
  5.times do
    event_user = EventUser.new(
      user_id: User.order('RANDOM()').limit(1)[0].id,
      event_id: event.id,
      relation_type: %w[booked wish].sample
    )
    event_user.save!
  end
end

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

# 5.times do
#   question = Question.new(
#     question: Faker::Movie.title,
#     answer: Faker::Movie.quote
#   )
#   question.save!
# end

Community.destroy_all
community = Community.new(
  profile_image: ['https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/braga.png', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/marina.png', 'https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/comunidade.jpg'],
  name: ['Felipe Braga', 'Marina Cerqueira'],
  profile: "Growing up in Recife, Brazil, Marina and Filipe started dancing with their families at a very young age. They were regulars at many forró events in Pernambuco's capital city. They started Forró Liverpool in January 2020, where they teach regular classes, and bring incredible guest teachers, amazing bands, and their own Brazilian culture to the growing forró scene in the city.",
  description: 'We are proudly community-led, with many Liverpool forrozeiras stepping up to organize events, offer marketing support, and teach workshops. Our friendly community is a beautiful mix of Brazilians and folks from all over the world.'
)
community.save!

Sitefestival.destroy_all

sitefestival = Sitefestival.new(
  navbar: ['Liverpool Forró Festival', 'Classes & Events', 'Our Community', 'FAQ', 'Tickets',
           'Teachers & Musicians', 'Program', 'FAQ', 'Tickets', 'Teachers & Musicians', 'Program', 'Liverpol', 'Festival FAQ'],
  image: [
    'https://www.otempo.com.br/image/contentid/policy:1.2638617:1647968748/Screen-Shot-2022-03-22-at-2-01-35-PM-png.png?f=3x2&q=0.6&w=1200&$p$f$q$w=ceb5660', 'https://www.otempo.com.br/image/contentid/policy:1.2638617:1647968748/Screen-Shot-2022-03-22-at-2-01-35-PM-png.png?f=3x2&q=0.6&w=1200&$p$f$q$w=ceb5660'
  ],
  data: '10-12 MAY, 2024',
  local: 'Liverpool, England',
  video: 'https://www.gov.br/pt-br/midias-agorabrasil/video-fundo.mp4',
  textvideo: "3 days of dance classes and parties with incredible forró teachers and musicians from around the world. Come celebrate Brazilian culture in the heart of the UK's music scene!",
  titlevideo: "Forró in the heart of the UK's music scene"
)
sitefestival.save!

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
