import userRoute from "./userRoute.js"
import itemRoute from './itemRoute.js'

const allRoutes = ({ app, db }) => {
  userRoute({ app, db })
  itemRoute({ app, db })
}

export default allRoutes
