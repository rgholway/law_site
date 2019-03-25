class Api::V1::EmailsController < ApplicationController

  def new
  end

  def create
    @email = Email.new(first_name: email_params[:first_name], last_name: email_params[:last_name], email: email_params[:email], message: email_params[:message])
    if @email.save
      EmailMailer.new_email(@email).deliver_now
    end
  end

  private
  def email_params
    params.permit(:first_name, :last_name, :email, :message)
  end
end
