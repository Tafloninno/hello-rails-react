require 'test_helper'

class Api::MessagesControllerTest < ActionDispatch::IntegrationTest
  test 'should get random' do
    get api_messages_random_url
    assert_response :success
  end
end
