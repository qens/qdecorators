export const Remote = (target, name, descriptor) => {
    target._remoteProps = target._remoteProps || [];
    target._remoteProps.push(name);
};