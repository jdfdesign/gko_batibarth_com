source :rubygems

group :assets do
 gem 'sass-rails', '~> 3.2.6'
 gem 'coffee-rails', '~> 3.2.2'
 gem 'uglifier', '>= 1.2.6'
end

group :production do
  git 'git@github.com:jdfdesign/gko_cms3.git', :branch => 'master' do
	  gem "gko_core"
	  gem "gko_categories"
	  gem "gko_stickers"
	  gem "gko_blog"
	  gem "gko_portfolio" 
	  gem "gko_twits"
	  gem "gko_features"
	end
end
#group :development do
#  gem "gko_core", :path => '~/Github/gko_cms3/gko_core'
#  gem "gko_stickers", :path => '~/Github/gko_cms3/gko_stickers'
#  gem "gko_categories", :path => '~/Github/gko_cms3/gko_categories'
#  gem "gko_blog", :path => '~/Github/gko_cms3/gko_blog'
#  gem "gko_portfolio", :path => '~/Github/gko_cms3/gko_portfolio'
#  gem "gko_twits", :path => '~/Github/gko_cms3/gko_twits'
#  gem "gko_features", :path => '~/Github/gko_cms3/gko_features'
#end