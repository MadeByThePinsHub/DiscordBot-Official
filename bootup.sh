# We use NPM to manage our packages and to save space in Glitch.

# Installs latest version of discordjs
npm install discordjs

# Then, install recommeded package for voice support
npm install node-opus

# Continue with optional packages
npm install bufferutil hammerandchisel/erlpack libsodium-wrappers @discordjs/uws

# If checks are successful, run the bot.
node bot.js