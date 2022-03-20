rm -rf dist
yarn build
cd dist
git init
git add .
git commit -m 'update'
git branch -M main
git remote add origin git@github.com:yinlulululu/lu-ui.git 
git push -u -f origin main
cd -