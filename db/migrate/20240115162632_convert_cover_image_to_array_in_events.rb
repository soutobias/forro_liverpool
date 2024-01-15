class ConvertCoverImageToArrayInEvents < ActiveRecord::Migration[7.1]
  def up
    # Adiciona uma nova coluna como array
    add_column :events, :cover_image_array, 'text[]', array: true, default: []

    # Atualiza a nova coluna com os valores da coluna antiga
    execute('UPDATE events SET cover_image_array = ARRAY[cover_image]')

    # Remove a coluna antiga
    remove_column :events, :cover_image

    # Renomeia a nova coluna para o nome original
    rename_column :events, :cover_image_array, :cover_image
  end

  def down
    # Adiciona uma nova coluna como string
    add_column :events, :cover_image_string, :text, array: false

    # Atualiza a nova coluna com os valores da coluna array
    execute('UPDATE events SET cover_image_string = cover_image[1]')

    # Remove a coluna array
    remove_column :events, :cover_image

    # Renomeia a nova coluna para o nome original
    rename_column :events, :cover_image_string, :cover_image
  end
end
