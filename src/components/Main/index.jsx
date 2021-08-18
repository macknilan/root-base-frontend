/*
COMPONENT "MAIN" THAT IS RESPONSIBLE FOR DISPLAYING THE LIST OF POSTS
*/

import React from 'react';
/* import PropTypes from 'prop-types'; */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export default function Main() {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Typography variant="h6" gutterBottom>
        From the firehose
      </Typography>
      <Divider />
      <Typography variant="h5" gutterBottom>
        Sample blog post
      </Typography>
      <Typography variant="caption" gutterBottom paragraph>
        April 1, 2020 by [Olivier]
      </Typography>
      <Typography paragraph>
        This blog post shows a few different types of content that are supported
        and styled with Material styles. Basic typography, images, and code are
        all supported. You can extend these by modifying `Markdown.js`. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras
        mattis consectetur purus sit amet fermentum. Curabitur blandit tempus
        porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem
        malesuada magna mollis euismod. Cras mattis consectetur purus sit amet
        fermentum. Aenean lacinia bibendum nulla sed consectetur.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Heading
      </Typography>
      <Typography variant="body2" gutterBottom paragraph>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
        vestibulum at eros.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Sub-heading
      </Typography>
      <Typography variant="body2" gutterBottom paragraph>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </Typography>
      <Typography component="span">
        <li>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </li>
        <li>Donec id elit non mi porta gravida at eget metus.</li>
        <li>Nulla vitae elit libero, a pharetra augue.</li>
      </Typography>
    </Grid>
  );
}
