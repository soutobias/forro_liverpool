class AddTicketLinkAndRemoveSellSiteNumberFromEvents < ActiveRecord::Migration[7.1]
  def change
    add_column :events, :ticket_link, :string
    remove_column :events, :sell_site_number
  end
end
