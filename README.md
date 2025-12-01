///1)
Qu'est-ce qui est vrai à propos de l'option --amend de la commande git commit ?

Plusieurs réponses attendues.

Rep:
Elle ne peut modifier que le dernier commit
Elle peut à la fois modifier le message de commit et ajouter des nouveaux fichiers au même commit

//2)
On considère l'historique de commits suivant :

La HEAD se situe au commit F. Vous réalisez que vos derniers commits sont incorrects et vous voulez donc changer votre branche courante pour pointer vers le commit C et faire en sorte que tous vos fichiers de travail soient identiques à ceux du commit C.

Parmi les propositions ci-contre, quelle est celle que vous devriez exécuter ?

git reset --hard HEAD~2

git reset --hard HEAD~3

git reset --hard HEAD~4

git reset --hard HEAD~~

reponse: git reset --hard HEAD~3

//3)
Quelle commande affiche, pour chaque ligne de code du fichier index.html, la révision et l'auteur correspondant à la dernière modification de cette ligne ?Quelle commande affiche, pour chaque ligne de code du fichier
index.html, la révision et l'auteur correspondant à la dernière modification de cette ligne ?
git show -b index.html

git show --blame index.html

git blame index.html

git show -blame index.html

reponse: git blame index.html

//4)
Qu'est-ce qu'un « Upstream Project » dans Jenkins ?

Un projet qui déclenche l'exécution d'un autre projet pendant son exécution

Un projet dans la file d'attente d'exécution

Dans un projet multi-branche, le « Upstream Project » est celui connecté à la branche master

Le premier projet dans un Pipeline multi-étapes

Reponse: Un projet qui déclenche l'exécution d'un autre projet pendant son exécution

//5)
Qu'arrive-t-il lorsque le nombre maximum d'executors est atteint par un Agent Jenkins ?

Le build sera placé dans la queue, en attente du prochain executor disponible

Le build sera perdu

Le Projet sera exécuté dans un workspace vide

Jenkins va émettre un avertissement pour indiquer que le nombre maximum d'exécutors a été atteint

Reponse: Le build sera placé dans la queue, en attente du prochain executor disponible

//6)
En CSS, à quoi correspondent les valeurs ci-dessous ?

margin: 10px 20px 15px -10px;

top bottom left right

top left bottom right

top right bottom left

face front reverse alpha

Cette règle CSS est invalide

Reponse: top right bottom left
margin: [top] [right] [bottom] [left]

//7) Parmi les propositions suivantes, lesquelles sont des politiques de version valide pour un manageur de dépôt maven ?

Plusieurs réponses attendues.

release

snapshot

production

staging

rolling

candidate

reponse:
✅ release - Pour les versions stables et finales
✅ snapshot - Pour les versions en développement (suffixe -SNAPSHOT)

8. Quels sont les avantages de l'utilisation du langage de requête Hibernate (HQL) par rapport au langage de requête natif dans un référentiel Spring Data ?

Des requêtes plus courtes avec l'option d'omettre des déclarations comme SELECT \* et la partie ON des déclarations de jointure

Validation des requêtes au démarrage de l'application

Migration transparente vers un autre langage de base de données relationnelle

Interopérabilité entre les bases de données SQL et NoSQL

Les avantages de l'utilisation de HQL par rapport au langage de requête natif sont :

Réponse:
✅ Des requêtes plus courtes avec l'option d'omettre des déclarations comme SELECT \* et la partie ON des déclarations de jointure

✅ Validation des requêtes au démarrage de l'application

✅ Migration transparente vers un autre langage de base de données relationnelle

Explication détaillée :

a. Requêtes plus courtes ✅
java
// HQL - Plus concis
"FROM User u WHERE u.age > 18"

// Au lieu de SQL natif
"SELECT \* FROM users u WHERE u.age > 18"

// Jointures implicites en HQL
"FROM Order o WHERE o.customer.name = 'John'"

// Hibernate génère automatiquement le JOIN

b. Validation au démarrage ✅
HQL est validé au démarrage de l'application (si configuré), permettant de détecter les erreurs de syntaxe avant l'exécution, contrairement aux requêtes natives qui ne sont validées qu'à l'exécution.

c. Migration transparente entre SGBD ✅
HQL est indépendant de la base de données. Hibernate traduit HQL vers le dialecte SQL approprié :

java
// Même requête HQL fonctionne pour MySQL, PostgreSQL, Oracle, etc.
"FROM User WHERE name LIKE :pattern"

9.  Jenkins est un des framework open source les plus populaire pour l'Intégration Continue (CI) et le Déploiement Continu (CD).

Quelles sont les définitions de ces termes ?

CI: la pratique en ingénieurie logicielle où les équipes compilent et intègrent automatiquement leur travail

CD: une extension de la CI où l'on déploie automatiquement les artefacts compilés et testés par la CI

CI: la pratique en ingénieurie logicielle où les APIs externes intégrées par le produit sont testées continuellement pour s'assurer qu'elles sont en bonne santé

CD: la pratique en ingénieurie logicielle qui assure que le code soit bien propagé à toutes les cibles SCM (telles que Git)

Réponse:

✅ CI : la pratique en ingénierie logicielle où les équipes compilent et intègrent automatiquement leur travail
✅ CD : une extension de la CI où l'on déploie automatiquement les artefacts compilés et testés par la CI

10. En TypeScript, l’inférence de type signifie que le compilateur peut déduire automatiquement le type d’une variable à partir de sa valeur initiale, sans qu’on ait besoin de le préciser explicitement.

Exemple correct :

let info = 10;

11. Quelle est la différence entre JPA et Hibernate ?
    La bonne réponse est : ✅ JPA est une spécification et Hibernate est une implémentation pour la persistance de données
