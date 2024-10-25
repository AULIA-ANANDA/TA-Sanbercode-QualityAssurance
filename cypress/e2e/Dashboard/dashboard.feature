Feature: Dashboard Feature

    Scenario: Search Admin Page by Username
        Given I Visit URL Halaman Login
        When I should see Homepage
        When I Submit Username
        When I Submit Password
        Then I Click Button Login
        Then I Verify Login Success
        Then I Click Admin Page
        Then I Verify Admin Page
        When I Input Username in Search
        Then I Click Button Search
        Then I Verify Tabel Data
    Scenario: Search Admin Page by User Role ADMIN
        Given I Visit URL Halaman Login
        When I should see Homepage
        When I Submit Username
        When I Submit Password
        Then I Click Button Login
        Then I Verify Login Success
        Then I Click Admin Page
        Then I Verify Admin Page
        When I Select User Role Admin
        Then I Click Button Search
        Then I Verify Tabel Data
    Scenario: Search Admin Page by User Role ESS
        Given I Visit URL Halaman Login
        When I should see Homepage
        When I Submit Username
        When I Submit Password
        Then I Click Button Login
        Then I Verify Login Success
        Then I Click Admin Page
        Then I Verify Admin Page
        When I Select User Role ESS
        Then I Click Button Search
        Then I Verify Tabel Data
    Scenario: Search Admin Page by Status Enabled
        Given I Visit URL Halaman Login
        When I should see Homepage
        When I Submit Username
        When I Submit Password
        Then I Click Button Login
        Then I Verify Login Success
        Then I Click Admin Page
        Then I Verify Admin Page
        When I Select Status Enabled
        Then I Click Button Search
        Then I Verify Tabel Data
    Scenario: Search Admin Page by Status Disabled
        Given I Visit URL Halaman Login
        When I should see Homepage
        When I Submit Username
        When I Submit Password
        Then I Click Button Login
        Then I Verify Login Success
        Then I Click Admin Page
        Then I Verify Admin Page
        When I Select Status Disabled
        Then I Click Button Search
        Then I Verify Tabel Data