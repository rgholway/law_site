class Api::V1::EmailsController < ApplicationController

  def new
  end

  def create
    binding.pry
    @email = Email.new(email_params)
  end

  private
  def email_params
    params.require(:firstName, :lastName, :email, :message)
  end
end
