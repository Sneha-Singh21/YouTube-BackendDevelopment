# YouTube-BackendDevelopment
A mini YouTube clone project where we design our won front-end, back-end and database

-(Model Link)[https://app.eraser.io/workspace/YtPqZ...%E2%80%8B]

<!-- This command can be used to create new files in terminal if touch is not supported -->
(New-Item -ItemType File app.js, constants.js, index.js)


<!-- We can use this command to make multiple files if mkdir is not suported  -->
(@('controllers', 'db', 'middlewares', 'models', 'routes', 'utils') | ForEach-Object { New-Item -ItemType Directory -Name $_ }
)