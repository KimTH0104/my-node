cat >./server/config/config.json <<EOF
{
 "NODE_ENV":"$1"
}
EOF

if [ $1 == "production" ]
then
cat >.env <<EOF
EOF
else
cat >.env <<EOF
EOF
fi
