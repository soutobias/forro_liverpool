class ConvertImageToArrayInFestivalFestivalTeachers < ActiveRecord::Migration[7.1]
  def up
    # Adiciona uma nova coluna como array
    add_column :festival_teachers, :image_array, 'text[]', array: true, default: []

    # Atualiza a nova coluna com os valores da coluna antiga
    execute('UPDATE festival_teachers SET image_array = ARRAY[image]')

    # Remove a coluna antiga
    remove_column :festival_teachers, :image

    # Renomeia a nova coluna para o nome original
    rename_column :festival_teachers, :image_array, :image
  end

  def down
    # Adiciona uma nova coluna como string
    add_column :festival_festival_teachers, :image_string, :text, array: false

    # Atualiza a nova coluna com os valores da coluna array
    execute('UPDATE festival_festival_teachers SET image_string = image[1]')

    # Remove a coluna array
    remove_column :festival_festival_teachers, :image

    # Renomeia a nova coluna para o nome original
    rename_column :festival_festival_teachers, :image_string, :image
  end
end

