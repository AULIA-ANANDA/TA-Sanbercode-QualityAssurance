Feature: Login Feature

    Scenario: TC_LOG_001 Login dengan Valid Username dan Password
        Given I Visit URL
        When I should see Homepage
        When I Submit Username
        When I Submit Password
        Then I Click Button Login
        Then I Verify Login Success
    Scenario: TC_LOG_002 Login dengan Valid Username dan Password
        Given I Visit URL
        When I should see Homepage
        When I Submit Username
        When I Submit the Second Password
        Then I Click the Second Button Login
        Then I Verify Invalid Credentials
    Scenario: TC_LOG_003 Login dengan Valid Username dan Invalid Password
        Given I Visit URL
        When I should see Homepage
        When I Submit Username
        When I Submit the Third Password
        Then I Click the Second Button Login
        Then I Verify Invalid Credentials
    Scenario: TC_LOG_004 Login dengan Username menggunakan simbol dan Valid Password
        Given I Visit URL
        When I should see Homepage
        When I Submit the Second Username
        When I Submit Password
        Then I Click the Second Button Login
        Then I Verify Invalid Credentials
    Scenario: TC_LOG_005 Login dengan Valid Username dan Password menggunakan simbol
        Given I Visit URL
        When I should see Homepage
        When I Submit Username
        When I Submit the Fourth Password
        Then I Click the Second Button Login
        Then I Verify Invalid Credentials
    Scenario: TC_LOG_006 Login dengan Valid Username dan Empty Password
        Given I Visit URL
        When I should see Homepage
        When I Submit Username
        When I Submit the Fifth Password
        Then I Click the Second Button Login
        Then I Verify Required Message
    Scenario: TC_LOG_007 Login dengan Empty Username dan Valid Password
        Given I Visit URL
        When I should see Homepage
        When I Submit the Third Username
        When I Submit Password
        Then I Click the Second Button Login
        Then I Verify Required Message
    Scenario: TC_LOG_008 Login dengan Empty Username dan Password
        Given I Visit URL
        When I should see Homepage
        When I Submit the Third Username
        When I Submit the Fifth Password
        Then I Click the Second Button Login
        Then I Verify Required Message
    Scenario: TC_LOG_009 Login dengan Copy Username dan Password dari Notepad
        Given I Visit URL
        When I should see Homepage
        When I Submit Username
        When I Submit Password
        Then I Click Button Login
        Then I Verify Login Success
    Scenario: TC_LOG_010 Login Menggunakan Tombol Enter Setelah Input Valid Username dan Password
        Given I Visit URL
        When I should see Homepage
        When I Submit Username
        When I Submit the Sixth Password
        Then I Click the Third Button Login
        Then I Verify Login Success
    Scenario: TC_LOG_011 Login Menggunakan Tombol Enter Setelah Input Valid Username
        Given I Visit URL
        When I should see Homepage
        When I Submit the Fourth Username
        Then I Verify Required Message
    Scenario: TC_LOG_011 Login Menggunakan Tombol Enter Setelah Input Valid Username
        Given I Visit URL
        When I should see Homepage
        When I Should See Forgot Password
        Then I Click Forgot Password
        Then I Verify Dashboard Reset Password
