# Inserting new Info 

👩‍💻👨‍💻 follow the instructions and everyting'll be fine 👩‍💻👨‍💻

📢 **Important:** It may take *several minutes* to get the website's information updated. Be patient.

<details>
  <summary>Table of contents</summary>

---
- [Members](#members)
- [Projects](#projects)
- [Publications](#publications)
---

</details>


### **Members**
Insert the info below into the file [integrantes_list.yaml](_data/integrantes_list.yaml) and start editing it. 

```
- nome: <name>
  sobrenome: <family name>
  grupos: <options: smart, nlp, health-ai; if more than one, separate them by comma>
  posicao: <options: Undergraduate Research Trainee, MsC Student, PhD Student, Post-Doctoral Researcher, Associate Professor> 
  nivel: <your current graduation level; options: msc, doc, pos-doc> 
  foto: <link to a photo of yours; you can also upload a photo to the folder 'assets' and insert the path: assets/<photo-name>>
  email: 
  redes-sociais: <choose the ones that you want to share; delete the remaining lines>
    dblp:
    facebook: 
    github:
    insta: 
    lattes: 
    linkedin:    
    orcid:
    site: 
    twitter:
  sobre: <a description about what you are researching on>
  formacao: <not sure>
  origem: <place you were born; format: city - state>
  nascimento: 
```

### **Projects**
  
Insert the info below into the file [projetos_list.yaml](_data/projetos_list.yaml) and start editing it. 
  
```
- titulo: <name> 
  status: <options: active, done>
  palavras-chaves: <keywords separated by comma>
  descricao: 
  grupos: <groups that participate in the project; options: smart, nlp, health-ai; separated by comma>
  links: <use as many links as you want; delete the lines you are not using>
    git: 
    git_2:
    site:
    conferencia:
    download:
```
  
### **Publications**
  
All entries are initially grouped by *comment*, followed by *year*. After that, they are sorted by its *entry position* in the file. 

All fields in a bib entry will be shown in the website. In case you don't want to show a particular field, but want to keep it in the bib entry, you should use: ["_"] before the field's name (e.g., pass: [_year=2018]). You can also use the _abstract_ and _keyword_ fields; all the text inserted in these fields are displayed as folded sections underneath your publication.  

The field *comment* states which group the publication belongs to. You can use more than one group separated by comma.**Options:** smart, nlp, health-ai

We recommend to use the following templates for a bib entry. Note that, the _url field_ should point to the paper's link (pdf). 

* *InProceedings*: ``author``, ``title``, ``booktitle``, ``pages``, ``year``, ``doi``, and ``comment``;
* *Article*: ``author``, ``title``, ``journal``, ``volume``, ``month``, ``pages``, ``year``, ``doi``, and ``comment``;
* *PhD Thesis*: ``author``, ``title``, ``year``, ``url``, and ``school``, and ``comment``;
* *Masters Thesis*: ``author``, ``title``, ``year``, ``url``, and ``school``, and ``comment``.
