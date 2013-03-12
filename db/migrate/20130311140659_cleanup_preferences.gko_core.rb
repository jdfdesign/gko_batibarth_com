# This migration comes from gko_core (originally 20130310091200)
class CleanupPreferences < ActiveRecord::Migration
  def up
    rename_column :preferences, :key, :value_key 
    pref_keys = ['global_slideshow', 'image_thumb_size', 'image_carousel_size', 'features_image_size']
    Site.all.each do |site|
      Site.current = site
      pref_keys.each do |k|
        if result = ActiveRecord::Base.connection.select_one("SELECT * FROM preferences WHERE value_key='site/#{k}/#{site.id.to_s}'") 
          #puts result.to_s
          id = result['id'].to_i
          val = result['value']
          puts val.to_s
          site["#{k}"] = val
          ActiveRecord::Base.connection.execute("DELETE FROM preferences WHERE id='#{id}'")
        end
        site.save!
      end
    end 
    rename_column :preferences, :value_key, :key
  end
end

