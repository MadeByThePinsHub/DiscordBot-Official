# We use NPM to manage our packages and to save space in Glitch.

# Installs latest version of discordjs
npm install discordjs

# Then, install recommeded package for voice support
npm install node-opus

# Continue with optional packages
npm install bufferutil
npm install hammerandchisel/erlpack
npm install libsodium-wrappers # replace with 'pnpm install sodium' (inside these '') if you want
npm install @discordjs/uws

# When done, run the dependency installer again for checks. See the logs for more info.
npm install

# If checks are successful, run the bot.
node bot.js