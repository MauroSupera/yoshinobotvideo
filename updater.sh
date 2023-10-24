#!/bin/bash
echo -e "\e[32mCompactando as pastas necessarias \e[0m"
# Aqui abaixo você pode compactar arquivos ou pastas pra protege-los porque os arquivos serão excluidos e abaixo tem uma regra pra proteger os seus arquivos
# Neste caso aqui embaixo estou compactando a pasta settings, se quiser compactar um arquivo dentro você pode, por ex: zip -r o nome do arquivo em zip + a localização
# Ou seja, zip -r settings/settings.json aqui estamos especificando que dentro da pasta settings quero compactar o arquivo settings.json, entendeu a logica? Voce pode fazer isso com mais arquivos tipo assim:
# zip -r settings.zip settings
# zip -r qrcode.zip database/qr-code
# Ai acima eu estou pedindo que compacte duas pastas, a primeira porque esta no mesmo local deste script e a outra esta dentro da pasta database, entendeu a logica? Se sim vamos continuar.
zip -r settings.zip settings
zip -r qrcode.zip database/qr-code
# Encontra e remove todos os arquivos e pastas exceto os especificados, entendeu? Aqui nesta aba é onde todos os arquivos serão apagados excepto os colocados dentro deles
# A logica é junte dos outros o seguinte (-name "caminho da pasta ou arquivo" -o) e junta no meio dos outros, entendeu? Senão entendeu não é minha culpa kkk

find . -maxdepth 1 ! \( -name "settings.zip" -o -name "database/qrcode.zip" -o -name "Yoshino Updater Working.zip" -o -name "latest_release.zip" \) -exec rm -rf {} \;

# Descompactando o arquivo da nova atualização, o que voce precisa fazer é compactar a pasta do bot e subir no github na case ja vem predefinido pra ter este nome "latest_release.zip"
unzip latest_release.zip

# Movendo o conteúdo da pasta do seu bot para para /home/container
# Se voce nao entendeu a logica toda aqui, deixa eu te explicar, na primeira parte nós compactamos a pasta settings, e em seguida protegemos alguns arquivos como a nova atualização baixada e os arquivos que nós colocamos como excessão ai ele apaga tudo da pasta e em seguida extraimos o arquivo latest_release.zip e ai abaixo e movemos o conteudo para a pasta principal que é /home/container
# Saiba que isto esta sendo feito para o servidor da Vortexus, se voce estiver fazendo para as atualizações para smartphones e não servidor, recomendo entrar em contato comigo para ter uma estrutura melhor.

cd yoshinovideo && mv * .[^.]* /home/container/

# Remover a pasta pastadobot como ja extraimos e movemos o conteudo para o /home/container/ a pasta não é mais necessaria por isso apagamos ela para outras atualizações não houver erros.
rm -rf /home/container/yoshinovideo

# Remover o arquivo latest_release.zip, aqui removemos o arquivo porque já não é mais necessario o arquivo pois sempre que a pessoa usar o comando ele vai baixar de novo e de novo
rm /home/container/latest_release.zip

# Remover a pasta settings, aqui na verdade é um pouco diferente, tipo assim, como nós atualizamos o nosso bot os arquivos dentro dele vêm predefinidos ai voce vai apagar todos os arquivos e pastas que têm haver com os backups que voce fez la encima e eu como estou apenas compactando uma pasta apenas ai vou apagar a que veio na atualização e depois la embaixo extrair o meu backup, entendeu?
rm -rf /home/container/settings
rm -rf /home/container/database/qr-code
# Descompactar o arquivo settings.zip no diretório /home/container/, aqui nós depois de ter apagado a pasta que veio com a atualização, estamos extraindo o nosso backup da mesma pasta pode fazer o mesmo com multiplos arquivos ou pastas copiando a logica e aplicando para as outras pastas ou arquivos compactados anteriormente
unzip /home/container/settings.zip -d /home/container/
unzip /home/container/qrcode.zip -d /home/container/database
# Remover o arquivo settings.zip após a descompactação, aqui coloque todos os arquivos feitos como backup para serem removidos depois de sua extração, ou seja, isso tudo será um ciclo automatico sempre que for atualizar vai seguindo a mesma regra, Entendeu? Senão entendeu não é culpa minha kkkk
rm /home/container/settings.zip
rm /home/container/database/qrcode.zip
# E fim! kkkk