# We use PNPM to manage our packages and to save space in Glitch.

# Installs PNPM first
npm install pnpm

# Installs latest version of discordjs
pnpm install discordjs

# Then, install recommeded package for voice support
pnpm install node-opus

# Continue with optional packages
pnpm install bufferutil
pnpm install hammerandchisel/erlpack
pnpm install libsodium-wrappers # replace with 'pnpm install sodium' (inside these '') if you want
pnpm install @discordjs/uws

# When done, 