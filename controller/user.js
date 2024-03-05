
// In-memory data store
let posts = [
    {
        id: 1,
        title: "The Rise of Decentralized Finance",
        content:
            "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
        author: "Alex Thompson",
        date: "2023-08-01T10:00:00Z",
        type: "fin"
    },
    {
        id: 2,
        title: "The Impact of Artificial Intelligence on Modern Businesses",
        content:
            "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
        author: "Mia Williams",
        date: "2023-08-05T14:30:00Z",
        type: "tech"
    },
    {
        id: 3,
        title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
        content:
            "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
        author: "Samuel Green",
        date: "2023-08-10T09:15:00Z",
        type:"eco"
    },
];

let last_id = 3;

export const getPosts = (req,res)=>{
    res.json(posts)
}

export const spp = (req,res)=>{
    const spost = posts.find((p) => p.id === parseInt(req.params.id));
    if (!spost) return res.status(404).json({ message: "Post not found" });
    res.json(spost)
}

export const newp = (req, res) => {
    const newId = last_id += 1;
    const post = {
      id: newId,
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      date: new Date(),
    };
    last_id = newId;
    posts.push(post);
    res.status(201).json(post);
  };

  export const editp = (req,res)=>{
    const post = posts.find((a) => a.id === parseInt(req.params.id))
    if(!post) return res.status(404).json({message:"Post not found!"});

    if(req.body.title) post.title = req.body.title;
    if(req.body.content) post.content = req.body.content;
    if(req.body.author) post.author = req.body.author;
    res.json(post);
  }

  export const delp = (req,res)=>{
    const index = posts.findIndex((a) => a.id === parseInt(req.params.id))
    if(index===-1) return res.status(404).json({message:"post not found!"})
    posts.splice(index,1);
    res.status(200).json(posts);
  }

  export const filtration = (req,res)=>{
    const post = posts.filter((a) => a.type === req.query.type)
    res.json(post)
  }