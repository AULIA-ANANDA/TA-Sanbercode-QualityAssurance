Feature: Forgot Password Page

    Scenario: Reset Password Berhasil
        Given I Visit URL
        When I should see Homepage Reset Password
        When I Input Username
        Then I Click Button Reset Password
        Then I Verify Reset Password link sent successfully
    Scenario: Reset Password Failed
        Given I Visit URL
        When I should see Homepage Reset Password
        When I Input The Second Username
        Then I Click The Second Button Reset Password
        Then I Verify Required Message
    Scenario: Reset Password Failed - with Keyboard Enter
        Given I Visit URL
        When I should see Homepage Reset Password
        When I Input The Third Username
        Then I Verify Reset Password link sent successfully
    Scenario: Verifikasi Button Cancel
        Given I Visit URL
        When I should see Homepage Reset Password
        Then I Click Button Cancel
        Then I Verify Login Homepage