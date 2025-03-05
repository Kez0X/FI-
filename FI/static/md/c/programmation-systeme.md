# ⚙️ Programmation Système en C  

La **programmation système** en C permet d’interagir directement avec le système d’exploitation (OS) pour gérer les processus, la mémoire, les fichiers et les périphériques. Elle est utilisée dans le développement des **systèmes d’exploitation**, des **drivers**, et des **logiciels bas niveau**.  

## 🏗 1. Qu'est-ce que la Programmation Système ?  

📌 Contrairement aux applications classiques, la programmation système se concentre sur :  
- L'**interaction avec le noyau** de l'OS 🖥️  
- La **gestion des processus et threads** 🏃‍♂️  
- La **manipulation des fichiers et entrées/sorties** 📂  
- La **gestion de la mémoire** (allocation, mmap, etc.) 🧠  
- La **communication inter-processus (IPC)** 🔗  

💡 Le langage C est idéal pour ce type de programmation car il offre **un contrôle direct sur le matériel** et une **performance optimisée**.  


## 📂 2. Gestion des Fichiers et Entrées/Sorties  

La manipulation des fichiers repose sur l'API POSIX et la bibliothèque standard C (`stdio.h`, `fcntl.h`, etc.).  

### 📌 Ouvrir un fichier en mode lecture  

```c
#include <stdio.h>

int main() {
    FILE *file = fopen("test.txt", "r");

    if (file == NULL) {
        perror("Erreur d'ouverture");
        return 1;
    }

    printf("Fichier ouvert avec succès !\n");
    fclose(file);
    return 0;
}
```

🔹 `fopen()` ouvre un fichier, `fclose()` le ferme.  
🔹 `perror()` affiche un message d'erreur système.  


## ⚡ 3. Gestion des Processus  

📌 En C sous Unix/Linux, la création de processus se fait avec `fork()`.  

### 📌 Créer un processus enfant  

```c
#include <stdio.h>
#include <unistd.h>

int main() {
    pid_t pid = fork();

    if (pid == -1) {
        perror("Erreur lors de la création du processus");
        return 1;
    }

    if (pid == 0) {
        printf("Processus enfant (PID = %d)\n", getpid());
    } else {
        printf("Processus parent (PID = %d)\n", getpid());
    }

    return 0;
}
```

🔹 `fork()` crée un **nouveau processus** en dupliquant le processus actuel.  
🔹 `getpid()` retourne l'ID du processus en cours.  


## 🔄 4. Gestion des Threads (Multithreading)  

📌 Pour créer un **thread** (processus léger), on utilise `pthread`.  

### 📌 Exemple : Création d’un thread  

```c
#include <stdio.h>
#include <pthread.h>

void *fonctionThread(void *arg) {
    printf("Thread exécuté !\n");
    return NULL;
}

int main() {
    pthread_t thread;
    pthread_create(&thread, NULL, fonctionThread, NULL);
    pthread_join(thread, NULL); // Attendre la fin du thread
    return 0;
}
```

🔹 `pthread_create()` crée un thread.  
🔹 `pthread_join()` attend la fin du thread.  


## 🔗 5. Communication Inter-Processus (IPC)  

📌 Les processus peuvent communiquer via :  
✅ **Pipes (`pipe()`)** : Communication unidirectionnelle entre processus.  
✅ **Sockets (`socket()`)** : Communication entre machines via le réseau.  
✅ **Mémoire partagée (`shmget()`)** : Accès partagé à un espace mémoire.  

### 📌 Exemple : Pipe entre un parent et un enfant  

```c
#include <stdio.h>
#include <unistd.h>

int main() {
    int fd[2]; 
    pipe(fd);  // Création du pipe

    if (fork() == 0) { // Processus enfant
        close(fd[0]);  // Ferme la lecture
        write(fd[1], "Hello", 6);
    } else { // Processus parent
        close(fd[1]);  // Ferme l’écriture
        char buffer[10];
        read(fd[0], buffer, sizeof(buffer));
        printf("Message reçu : %s\n", buffer);
    }

    return 0;
}
```

🔹 `pipe(fd)` crée un **canal de communication**.  
🔹 `write()` et `read()` permettent d’envoyer et de recevoir des données.  


## 🧠 6. Gestion de la Mémoire  

📌 En programmation système, la mémoire peut être gérée via :  
✅ **`malloc()` / `free()`** : Allocation dynamique classique.  
✅ **`mmap()`** : Allocation mémoire avancée pour le partage mémoire et la gestion des fichiers en mémoire.  

### 📌 Exemple : Allocation mémoire avec `mmap()`  

```c
#include <stdio.h>
#include <sys/mman.h>

int main() {
    int *ptr = mmap(NULL, sizeof(int), PROT_READ | PROT_WRITE, MAP_ANONYMOUS | MAP_PRIVATE, -1, 0);
    
    if (ptr == MAP_FAILED) {
        perror("Échec de mmap");
        return 1;
    }

    *ptr = 42;
    printf("Valeur stockée en mémoire partagée : %d\n", *ptr);

    munmap(ptr, sizeof(int));
    return 0;
}
```

🔹 `mmap()` alloue un espace mémoire partagé entre processus.  
🔹 `munmap()` libère la mémoire.  


## 🖧 7. Programmation Réseau avec Sockets  

📌 En C, la communication réseau repose sur **les sockets** (`socket.h`).  

### 📌 Exemple : Création d’un serveur TCP  

```c
#include <stdio.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <string.h>

int main() {
    int serveur = socket(AF_INET, SOCK_STREAM, 0);
    struct sockaddr_in addr;
    
    addr.sin_family = AF_INET;
    addr.sin_port = htons(8080);
    addr.sin_addr.s_addr = INADDR_ANY;

    bind(serveur, (struct sockaddr *)&addr, sizeof(addr));
    listen(serveur, 5);

    int client = accept(serveur, NULL, NULL);
    char message[] = "Bonjour Client!";
    send(client, message, strlen(message), 0);

    close(serveur);
    return 0;
}
```

🔹 `socket()` crée un socket.  
🔹 `bind()` lie le socket à un port.  
🔹 `listen()` met le serveur en attente de connexions.  
🔹 `accept()` attend une connexion.  


## 🎯 Conclusion  

✅ La **programmation système** en C est essentielle pour développer des **applications bas niveau** et **interagir avec le système d'exploitation**.  
✅ Elle englobe **les fichiers, la gestion des processus, les threads, la mémoire et le réseau**.  
✅ Maîtriser ces concepts permet de développer des **OS, serveurs, et applications performantes**. 🚀  

💡 **Astuce** : Toujours tester et gérer les erreurs système avec `perror()` pour éviter les bugs critiques ! 🔍