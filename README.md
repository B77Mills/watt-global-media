# new-account-template
Repository template for a new Parameter1 CMS customer

Create a new repository from this template, using the following naming structure:
`parameter1/dasherized-account-name-websites`

After creating the repository, run the following case-sensitive find/replaces:

1. Replace `dasherized-account-name` with the dasherized account name (e.g; `p1-sandbox`)
2. Replace `Full Account Name` with the full account name (e.g; `Parameter1`)
3. Replace `p1_sandbox` with the Base tenant key (e.g; `account_all`)

For each site:
1. Create a copy of the `sites/parameter1.dev` folder and run the following find/replaces:
  1. Replace `parameter1.dev` with the site TLD (e.g; `www.parameter1.com`)
  2. Replace `dasherized-site-name` with the full site name (e.g; `Sandbox`)
2. Add a service definition to the docker-compose file and increment port numbers
