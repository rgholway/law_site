class EmailMailer < ApplicationMailer
  def new_email(email)
    mail(
      to: email.email,
      subject: "New Client",
      body: email.message
    )
  end
end
