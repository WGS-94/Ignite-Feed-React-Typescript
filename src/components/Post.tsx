import React, { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}


export function Post({ author, publishedAt, content }: PostProps) {

  const [comments, setComments] = useState([
    'Muito bom, parabéns!! 👏👏'
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  // qual é o tipo de evento
  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handlenewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  // qual é o tipo da informação que eu recebo
  function deleteComment(commentToDelete: string) {
    const commentsWithouDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })

    setComments(commentsWithouDeleteOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>

      </header>

      <div className={styles.contentPost}>

        {content.map((line) => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }else if (line.type === 'link') {
            return <p key={line.content}>👉 <a href="#">{line.content}</a></p>
          }
        })}
        
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentário' 
          name="comment" 
          value={newCommentText}
          onChange={handlenewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button 
            type='submit' 
            disabled={isNewCommentEmpty}
          >Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
       {comments.map((comment) => {
         return (
         <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment} 
            publishedAt={publishedAt}
          />
         )
       })}
      </div>
     
    </article>
  )
}
