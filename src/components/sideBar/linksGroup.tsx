import { useState } from 'react';
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  rem,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from '@/css/linksGroup.module.css';
import { LinksGroupProps } from '@/types/sidebar';
import { useNavigate } from 'react-router-dom';

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  link,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const navigate = useNavigate();

  const items = (hasLinks ? links : []).map((link) => (
    <Text
      className={`${classes.link} cursor-pointer`}
      key={link.label}
      onClick={() => {
        navigate(`${link.link}`);
      }}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group
          justify="space-between"
          gap={0}
          onClick={() => {
            !hasLinks && navigate(`/${link}`);
          }}
        >
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon color="yellow" variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
