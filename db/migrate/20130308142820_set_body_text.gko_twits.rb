# This migration comes from gko_twits (originally 20110912000000)
class SetBodyText < ActiveRecord::Migration
  def self.up
    change_column :twits, :body, :text
    change_column :twit_translations, :body, :text
  end

  def self.down
    change_column :twits, :body, :string
    change_column :twit_translations, :body, :string
  end
end