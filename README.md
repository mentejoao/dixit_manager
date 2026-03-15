pipeline inicialmente pensado:
```
camera
↓
detectar carta
↓
corrigir perspectiva
↓
crop
↓
resize 224x224
↓
DINOv2 embedding
↓
FAISS search
↓
retorna carta
```
