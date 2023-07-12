class Api::MessagesController < ApplicationController
  def random
    message = Greetings.order('RANDOM()').first
    render json: { greeting: message.content }
  end
end
