import eel
import random
eel.init('web')

num = random.randint(1, 100)

@eel.expose
def getData_from_backend():
    return f"Dados retornados do back-end: {num} (Numéro gerado aleatoriamente pelo python)"

@eel.expose
def sendData_to_frontend(msg):
    print(msg)


eel.start('index.html')
