# TODO

- ~~Search over all specialties instead of expecting users to write out the whole specialty~~
- ~~Set the search term display using state, not innerHTML~~
- ~~Reset search should reset the search term as well~~
- ~~Do case insensitive search~~
- ~~Search by years of experience~~
- ~~When you delete everything, reset filtered~~
- ~~Use the DB to get advocate IDs for react element list keys~~
- Import type ReactNode
- Update DB migration and seeding docs
- Add some padding
- Add cell border
- Use fixed-width colums
- Add row numbers?
- Highlight headers
- Add paging
- Add reset button styling? Remove reset button?
- Auto focus on the search input
- Center the table horizontally
- Use chips for specialties?
- Add column sorting 
- Limit number of advocates in response and page them
- Send search query to backend

# Suggestions

- Don't use serial ids for database entities
- Use a base entity with things like id, createdAt, updatedAt, and deletedAt
- Use a text field for phone number
- Should city be a reference to a table? Or maybe an encoded location so we can do location searches?
- Should specialties be a reference to a table? Or maybe an enum?
- Use faker to seed the DB
