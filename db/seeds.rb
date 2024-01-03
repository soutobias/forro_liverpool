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
  if first
    10.times do
      user = User.new(
        name: Faker::Name.name,
        email: Faker::Internet.email,
        sell_site_token: SecureRandom.alphanumeric,
      )
      user.save!
    end
  end
end

Event.destroy_all

events_data = [
  {
    name: 'Liverpool Forró Festival 2024',
    description: 'Descrição do Evento 1',
    start_datetime: DateTime.now,
    end_datetime: DateTime.now + 3.hours,
    price: 20.0,
    cover_image: Faker::LoremFlickr.image,
    image: [Faker::LoremFlickr.image, Faker::LoremFlickr.image],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    sell_site_number: SecureRandom.alphanumeric,
    type_event: 'Special Events',
    location: ['The Caledonia', 'Unit 17, Albert Dock, Liverpool L3 4AF'],
    date: '10-12 MAY'
  },
  {
    name: 'Forró Workshop with Luiz Henrique',
    description: 'Descrição do Evento 2',
    start_datetime: DateTime.now,
    end_datetime: DateTime.now + 3.hours,
    price: 20.0,
    cover_image: Faker::LoremFlickr.image,
    image: [Faker::LoremFlickr.image, Faker::LoremFlickr.image],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    sell_site_number: SecureRandom.alphanumeric,
    type_event: 'Special Events',
    location: ['The Caledonia', 'Unit 17, Albert Dock, Liverpool L3 4AF'],
    date: '10 MAY'
  },
  {
    name: 'All Levels Forró classes',
    description: 'Descrição do Evento 3',
    start_datetime: DateTime.now,
    end_datetime: DateTime.now + 3.hours,
    price: 20.0,
    cover_image: Faker::LoremFlickr.image,
    image: [Faker::LoremFlickr.image, Faker::LoremFlickr.image],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    sell_site_number: SecureRandom.alphanumeric,
    type_event: 'Regular Events',
    location: ['The Caledonia', 'Unit 17, Albert Dock, Liverpool L3 4AF'],
    date: 'MONDAYS'
  },
  {
    name: 'Forró and Chips',
    description: 'live forró music',
    start_datetime: DateTime.now,
    end_datetime: DateTime.now + 3.hours,
    price: 20.0,
    cover_image: Faker::LoremFlickr.image,
    image: [Faker::LoremFlickr.image, Faker::LoremFlickr.image],
    registration_start_datetime: DateTime.now - 1.day,
    registration_end_datetime: DateTime.now + 1.day,
    sell_site_number: SecureRandom.alphanumeric,
    type_event: 'Regular Events',
    location: ['The Caledonia', 'Unit 17, Albert Dock, Liverpool L3 4AF'],
    date: 'WEDNESDAYS'
  }
]

events = events_data.map { |event_data| Event.create!(event_data) }

events.each do |event|
  5.times do
    event_user = EventUser.new(
      user_id: User.order('RANDOM()').limit(1)[0].id,
      event_id: event.id,
      relation_type: ['booked', 'wish'].sample
    )
    event_user.save!
  end
end


Site.destroy_all

site = Site.new(
  title: "Brazilian forró classes & events in the heart of Liverpool",
  description: "All-levels forró dance classes and live music events in the heart of Liverpool. No partner needed. Everyone is welcome!",
  frame: "Liverpool forró festival 1st lot tickets",
  cover_image: "https://www.otempo.com.br/image/contentid/policy:1.2638617:1647968748/Screen-Shot-2022-03-22-at-2-01-35-PM-png.png?f=3x2&q=0.6&w=1200&$p$f$q$w=ceb5660",
  cover_video: "https://www.gov.br/pt-br/midias-agorabrasil/video-fundo.mp4",
  image: [Faker::LoremFlickr.image, Faker::LoremFlickr.image]
)
site.save!

Question.destroy_all

questions_data = [ 
  {
    question: "What is Forró?",
    answer: "Forró is culture from the northeast of Brazil that quickly spread to the rest of the country. It is a style of music, dance, and community events that are now celebrated all over the world. The music traditionally employs just 3 instruments: the accordion, the triangle, and the zabumba (a type of drum). Interested in taking a listen? Check out our Spotify playlist, Forró Liverpool."
  },
  {
    question: "What style of forró do you teach?",
    answer: "We teach a mix of styles, with a focus on the roots of forró"
  },
  { 
    question: "Is there any sort of registration process to sign up for classes?",
    answer: "Nope! Just show up to class and pay at the door. We accept cash and card."
  }
]

questions = questions_data.map { |question_data| Question.create(question_data) }

# 5.times do
#   question = Question.new(
#     question: Faker::Movie.title,
#     answer: Faker::Movie.quote
#   )
#   question.save!
# end

Community.destroy_all
community = Community.new(
  profile_image: ['https://avatars.githubusercontent.com/u/85016706?v=4','https://avatars.githubusercontent.com/u/85016706?v=4'],
  name: ['Felipe Braga', 'Marina Cerqueira'],
  profile: "Growing up in Recife, Brazil, Marina and Filipe started dancing with their families at a very young age. They were regulars at many forró events in Pernambuco's capital city. They started Forró Liverpool in January 2020, where they teach regular classes, and bring incredible guest teachers, amazing bands, and their own Brazilian culture to the growing forró scene in the city.",
  description: "We are proudly community-led, with many Liverpool forrozeiras stepping up to organize events, offer marketing support, and teach workshops. Our friendly community is a beautiful mix of Brazilians and folks from all over the world."
)
community.save!

Sitefestival.destroy_all

sitefestival = Sitefestival.new(
  navbar: ['Liverpool Forró Festival 2024', 'Classes & Events', 'Our Community', 'FAQ', 'Tickets', 'Teachers & Musicians', 'Program', 'FAQ', 'Tickets', 'Teachers & Musicians', 'Program','Liverpol', 'Festival FAQ'],
  image: ['https://www.otempo.com.br/image/contentid/policy:1.2638617:1647968748/Screen-Shot-2022-03-22-at-2-01-35-PM-png.png?f=3x2&q=0.6&w=1200&$p$f$q$w=ceb5660', 'https://www.otempo.com.br/image/contentid/policy:1.2638617:1647968748/Screen-Shot-2022-03-22-at-2-01-35-PM-png.png?f=3x2&q=0.6&w=1200&$p$f$q$w=ceb5660'],
  data: "10-12 MAY, 2024",
  local: "Liverpool, England",
  video: "https://www.gov.br/pt-br/midias-agorabrasil/video-fundo.mp4",
  textvideo: "3 days of dance classes and parties with incredible forró teachers and musicians from around the world. Come celebrate Brazilian culture in the heart of the UK's music scene!",
  titlevideo: "Forró in the heart of the UK's music scene"
)
sitefestival.save!