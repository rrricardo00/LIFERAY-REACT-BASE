# How To

usar node 10.0
npm install
npm run start

Para dar o deploy: npm run deploy ou blade gw deploy

# package.json

“name”: alterar para o nome do projeto
“description”: alterar para o nome do projeto
“portlet”: {com.liferay.portlet.display-category: “alterar para a categoria -> category.{alterar}”}
		
# .npmbuildrc

“LiferayDir”: “../../bundles” - se estiver dentro da pasta modules, se estiver dentro de outra pasta que esteja dentro de modules, adicionar mais um “../”

