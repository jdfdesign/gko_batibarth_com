# This migration comes from gko_inquiries (originally 20130103090501)
class InquiryFillMailMethodsTable < ActiveRecord::Migration
  def up
      Site.all.each do |site|
        Site.current = site
        site.mail_methods.create(
          :environment => 'production',
          :mail_host => Gko::Core.default_smtp_settings[:mail_host],
          :mail_domain => Gko::Core.default_smtp_settings[:mail_domain],
          :mail_auth_type => Gko::Core.default_smtp_settings[:mail_auth_type],
          :smtp_username => Gko::Core.default_smtp_settings[:smtp_username],
          :smtp_password => Gko::Core.default_smtp_settings[:smtp_password],
          :secure_connection_type => Gko::Core.default_smtp_settings[:secure_connection_type],
          :mails_from => Gko::Core.default_smtp_settings[:mails_from],
          :mail_bcc => Gko::Core.default_smtp_settings[:mail_bcc]
        )
      end
  end

end