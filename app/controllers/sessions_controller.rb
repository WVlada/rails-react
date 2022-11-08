class SessionsController < ApplicationController
    def is_logged_in?
        # user is loged in if session has :id, and there is a user with that :id
        if logged_in? && current_user
          render json: {
            logged_in: true,
            user: current_user
          }
        else
          render json: {
            logged_in: false,
            message: 'no such user'
          }
        end
    end
end
